interface Props {
  value: number;
  onChange: (value: number) => void;
}

export const SelectMinimumLikes: React.FC<Props> = ({ value, onChange }) => (
  <input
    type="number"
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
  />
);
