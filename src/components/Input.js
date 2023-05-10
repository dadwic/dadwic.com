import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';

export default function Input({ control, name, ...props }) {
  const {
    field,
    fieldState: { invalid },
    formState: { errors },
  } = useController({
    name,
    control,
  });

  return (
    <TextField
      fullWidth
      required
      variant="outlined"
      error={invalid}
      helperText={errors[name]?.message}
      onChange={field.onChange} // send value to hook form
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      name={field.name} // send down the input name
      inputRef={field.ref} // send input ref, so we can focus on input when error appear
      {...props}
    />
  );
}
