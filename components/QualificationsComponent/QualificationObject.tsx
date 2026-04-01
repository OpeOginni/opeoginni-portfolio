interface Props {
  qualification: string;
  institution: string;
  period: string;
  description: string | null;
  location?: string;
}

export default function Qualifications({
  qualification,
  institution,
  period,
  description,
  location,
}: Props) {
  return (
    <div className="flex flex-col text-center">
      <h4 className="font-semibold text-[15px] leading-snug mb-2 text-neutral-900 dark:text-neutral-100">
        {qualification}
      </h4>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
        {institution}{location && ` \u00B7 ${location}`}
      </p>
      <p className="text-xs text-neutral-400 dark:text-neutral-500 font-medium tracking-wide">
        {period}
      </p>
      {description && (
        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
