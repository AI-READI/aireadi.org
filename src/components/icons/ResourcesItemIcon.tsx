import { AiFillGithub } from 'react-icons/ai';
import { FaLeanpub } from 'react-icons/fa';

const ResourcesItemIcon: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className='flex items-center justify-center rounded-lg bg-sky-600 p-3 text-white'>
      {type === 'publication' && <FaLeanpub size={24} />}
      {type === 'github' && <AiFillGithub size={24} />}
    </div>
  );
};

export default ResourcesItemIcon;
