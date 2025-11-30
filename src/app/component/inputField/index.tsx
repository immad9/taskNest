"use client";
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  styled,
  SxProps,
  Theme,
  Select,
  MenuItem,
  FormControl,
  Autocomplete, 
} from "@mui/material";
import React, { FC, useState } from "react";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  value?: string;
  sx?: SxProps<Theme>;
  labelStyle?: SxProps<Theme>;
  mt?: number;
  pt?: number;
  type?: string; // ⬅️ add type for password fields
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface SelectFieldProps {
  label?: string;
  value?: string | number;
  defaultValue?: string | number;
  options: { label: string; value: string | number }[];
  sx?: SxProps<Theme>;
  labelStyle?: SxProps<Theme>;
  mt?: number;
  pt?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any;
}

interface SearchableSelectProps {
  label?: string;
  value?: string;
  options: { label: string; value: string }[];
  sx?: SxProps<Theme>;
  labelStyle?: SxProps<Theme>;
  mt?: number;
  noOptionsText?: string;
  pt?: number;
  placeholder:string
  onChange?: (value: string | null) => void;
}


// Styled TextField
const InputField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    backgroundColor: "#fff",
    "&:hover fieldset": {
      borderColor: "var(--primary)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary)",
      borderWidth: 2,
    },
  },
  "& .MuiInputBase-input": {
    fontFamily: "var(--font-body)",
    fontSize: 16,
    color: "var(--text)",
    padding: "10px 12px",
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(1),
  borderRadius: 8,
  backgroundColor: "#fff",
  fontFamily: "var(--font-body)",
  fontSize: 16,
  color: "var(--text)",
  "& .MuiSelect-select": {
    padding: "10px 12px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--primary)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--primary)",
    borderWidth: 2,
  },
}));


// Styled TextField for Autocomplete input
const StyledTextField = styled(TextField)(({ }) => ({
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    backgroundColor: "#fff",
    "&:hover fieldset": {
      borderColor: "var(--primary)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "var(--primary)",
      borderWidth: 2,
    },
  },
  "& .MuiInputBase-input": {
    fontFamily: "var(--font-body)",
    fontSize: 16,
    color: "var(--text)",
    padding: "10px 12px",
    height :"10px"
  },
}));



const TextArea: FC<TextAreaProps> = ({
  label = "Staff Code",
  placeholder = "",
  multiline = false,
  rows = 1,
  value,
  labelStyle,
  onChange,
  mt,
  pt,
  sx,
  type = "text", // default type
}) => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle visibility
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isPassword = type === "password";

  return (
    <Box display="flex" flexDirection="column" mt={mt} pt={pt}>
      <Typography
        variant="body1"
        sx={{
          fontStyle: "italic",
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 400,
          color: "var(--text)",
          ...labelStyle
        }}
      >
        {label}
      </Typography>

      <InputField
        placeholder={placeholder}
        multiline={multiline}
        rows={rows}
        value={value}
        onChange={onChange}
        variant="outlined"
        sx={sx}
        type={isPassword ? (showPassword ? "text" : "password") : type}
        InputProps={{
          endAdornment: isPassword && (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword} edge="end">
                {showPassword ? (
                  <VisibilityOffIcon sx={{ color: "var(--primary)" }} />
                ) : (
                  <VisibilityIcon sx={{ color: "var(--primary)" }} />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};


const SelectField: FC<SelectFieldProps> = ({
  label = "Select Option",
  value,
  options,
  labelStyle,
  mt,
  pt,
  sx,
  defaultValue,
  onChange,
}) => {
  return (
    <Box display="flex" flexDirection="column" mt={mt} pt={pt}>
      <Typography
        variant="body1"
        sx={{
          fontStyle: "italic",
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 400,
          color: "var(--text)",
          ...labelStyle
        }}
      >
        {label}
      </Typography>

      <FormControl sx={{ width: "100%" }}>
        <StyledSelect
          value={value || ""}
          onChange={onChange}
          IconComponent={ArrowDropDownIcon} // 🔹 Icon on the right
          sx={sx}
          defaultValue={defaultValue}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </Box>
  );
};


const SearchableSelect: FC<SearchableSelectProps> = ({
  label = "Search Option",
  value,
  options,
  labelStyle,
  mt,
  pt,
  sx,
  onChange,
  placeholder,
  noOptionsText,
}) => {
  return (
    <Box display="flex" flexDirection="column" mt={mt} pt={pt}>
      <Typography
        variant="body1"
        sx={{
          fontStyle: "italic",
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 400,
          color: "var(--text)",
          ...labelStyle,
        }}
      >
        {label}
      </Typography>

      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.label}
        value={options.find((o) => o.value === value) || null}
        onChange={(_, newValue) => onChange?.(newValue ? newValue.value : null)}
        isOptionEqualToValue={(option, val) => option.value === val.value}
        noOptionsText={noOptionsText}
        sx={sx}
        renderInput={(params) => (
          <StyledTextField
            {...params}
            placeholder = {placeholder}
          />
        )}
      />
    </Box>
  );
};

export { TextArea,SelectField, SearchableSelect };
