'use client';

import * as React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement>

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ className, type, ...props }, ref) => {
    const [ showPassword, setShowPassword ] = React.useState(false);

    return (
      <div className="relative">
        <Input 
          type={showPassword ? "text": "password"}
          {...props} 
          ref={ref} 
          className={cn('pr-8', className)}
        />
        <span className="absolute top-[12px] right-3 cursor-pointer select-none">
          {showPassword ? <EyeIcon onClick={ () => setShowPassword(false) }/> : <EyeOffIcon onClick={ () => setShowPassword(true) } />}
        </span>
      </div>
    )
  }
);

PasswordInput.displayName = "PasswordInput";

export { PasswordInput };
