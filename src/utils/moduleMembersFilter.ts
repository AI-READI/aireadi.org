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
      const {
        base64,
        // eslint-disable-next-line unused-imports/no-unused-vars
        img: { width, height, ...img },
      } = await getPlaiceholder(member.image);

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
      moduleImageParams: member.moduleImageParams,
      blurDataURL: member.blurDataURL,
    };

    return item;
  });
}
