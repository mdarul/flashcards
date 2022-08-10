export default interface CollectionNameInputModalProps {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>; 
    collectionName: string;
    setCollectionName: React.Dispatch<React.SetStateAction<string>>;
    onSave: () => void;
    onClose: () => void;
}