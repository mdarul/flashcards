import React from "react";

export default interface ConfirmationModalProps {
    text: string;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    onConfirm: () => void;
    onCancel: () => void;
}