import { getPlaiceholder } from 'plaiceholder';

import TEAM_JSON from '~/data/team.json';

/**
 *
 * @param module
 * @returns
 */
export default async function ModuleMembersFilter(
  module: string,
): Promise<ModuleMemberType[]> {
  const AllTeamMembers: ModuleMemberType[] = await Promise.all(
    TEAM_JSON.map(async (member) => {
      let base64 = '';
      let img = {};

      try {
        const buffer = await fetch(member.image).then(async (res) =>
          Buffer.from(await res.arrayBuffer()),
        );

        const {
          base64: b64,
          // eslint-disable-next-line unused-imports/no-unused-vars
          img: { width, height, ...rest },
        } = await getPlaiceholder(buffer, { size: 10 });

        base64 = b64;
        img = rest;
      } catch (err) {
        console.warn(
          `Failed to fetch/process image for ${member.name}: ${err}. Using fallback.`,
        );
      }

      return {
        ...img,
        alt: `${member.name} profile picture`,
        ...member,
        blurDataURL: base64,
      };
    }),
  ).then((values) => values);

  const FilteredTeamMembers = AllTeamMembers.filter((member) =>
    member.modules.includes(module),
  );

  FilteredTeamMembers.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });

  return FilteredTeamMembers.map((member) => {
    const item: ModuleMemberType = {
      name: member.name,
      id: member.id,
      roles: member.roles,
      modules: member.modules,
      image: member.image,
      moduleImage: member.moduleImage,
      blurDataURL: member.blurDataURL,
    };

    return item;
  });
}
