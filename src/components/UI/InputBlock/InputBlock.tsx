import styles from "./InputBlock.module.scss";
import { TextField } from "@mui/material";
import { FC } from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";
import cn from "classnames";
import { AnimatePresence, motion } from "framer-motion";

interface IInputBlock {
  name: string;
  label?: string;
  type: "number" | "text" | "password";
  register: UseFormRegister<any>;
  error: string | undefined;
  rules: RegisterOptions;
  placeholder: string
}

export const InputBlock: FC<IInputBlock> = ({ error, name, register, rules, type, placeholder }) => {

  return (
    <div className={styles.main}>

      <AnimatePresence>
        {error
          && (
            <motion.p
              className={styles.error}
              initial={{ height: 0, x: "-100", opacity: 0 }}
              animate={{ height: "auto", x: 0, opacity: 1 }}
              exit={{ height: 0, x: "-100", opacity: 0 }}
            >
              {error}
            </motion.p>
          )}
      </AnimatePresence>
      <TextField
        variant="standard"
        size="small"
        type={type}
        className={styles.inp}
        placeholder={placeholder}
        {...(register && register(name, { ...rules }))}
        InputProps={{
          disableUnderline: true
        }}
      />


    </div>
  );
};
