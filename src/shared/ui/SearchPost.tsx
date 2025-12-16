interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchPost: React.FC<Props> = ({ value, onChange }) => (
  <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Поиск..."
    />
);
