const control =
  "mt-1.5 w-full rounded-xl border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus-visible:border-brand";

function Label({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium">
      {children}
      {!required && <span className="font-normal text-muted"> (optional)</span>}
    </label>
  );
}

export function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
  ...rest
}) {
  return (
    <div className={className}>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={control}
        {...rest}
      />
    </div>
  );
}

export function SelectField({
  label,
  name,
  options,
  required = false,
  placeholder = "Choose one",
  className = "",
  defaultValue = "",
}) {
  return (
    <div className={className}>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue={defaultValue}
        className={control}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const text = typeof option === "string" ? option : option.label;
          return (
            <option key={value} value={text}>
              {text}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export function TextareaField({
  label,
  name,
  required = false,
  rows = 5,
  className = "",
  ...rest
}) {
  return (
    <div className={className}>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        required={required}
        className={control}
        {...rest}
      />
    </div>
  );
}
