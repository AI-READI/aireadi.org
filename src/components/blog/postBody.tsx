interface PostBodyProps {
  content: string;
}

const postBody: React.FC<PostBodyProps> = ({ content }) => {
  return (
    <div className='prose-a:text-primary prose prose-slate max-w-none lg:prose-base prose-img:mx-auto prose-img:rounded-md prose-img:shadow-xl'>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default postBody;
