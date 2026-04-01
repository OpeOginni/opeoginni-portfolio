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
      <h1 className="font-semibold text-base leading-6 mb-4 text-neutral-900 dark:text-neutral-100">
        {qualification}
      </h1>
      <h1 className="pb-2 text-neutral-500 dark:text-neutral-400">
        {institution} - {location}
      </h1>
      <h1 className="text-neutral-500 dark:text-neutral-400">{period}</h1>
      {description && (
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}
