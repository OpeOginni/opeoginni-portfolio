/* eslint-disable @next/next/no-img-element */

interface Props {
  logoLocation: string;
  techName: string;
}
// TODO: Work on Skills and Cerification Component
export default function TechUsed({ logoLocation, techName }: Props) {
  return (
    <div className="py-7">
      <img className="w-[30px] h-[30px]" src={logoLocation} alt={techName} />
    </div>
  );
}
