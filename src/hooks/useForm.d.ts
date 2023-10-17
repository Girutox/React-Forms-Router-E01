export interface InputProps {
  id: string,
  name: string,
  value: string,
  error: string,
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}