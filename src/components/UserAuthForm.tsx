"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { Button } from "./ui/Button";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  return (
    <div className={cn("flex jusitify-center", className)}>
      <Button>Google</Button>
    </div>
  );
};

export default UserAuthForm;
