import React from "react";

interface SwitchProps {
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Switch({ onChange }: SwitchProps) {
  return (
    <div>
      <label htmlFor="switch" className="switch-wrap">
        <input type="checkbox" id="switch" onChange={onChange} />
      </label>
    </div>
  );
}
