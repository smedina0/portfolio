import Image from 'next/image';
function ProjectCard(props) {
  return (
    <div>
      <Image src={props.src} height={200} width={200} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
}

export default ProjectCard;
