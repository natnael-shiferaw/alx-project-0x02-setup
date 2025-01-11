// interface for Card props
export interface CardProps {
    title: string,
    content: string,
}

// interface for PostModalProps
export interface PostModalProps {
    isOpen: boolean,
    onClose: () => void,
    onSave: (title: string, content: string) => void, 
}

// interface for a Button that accepts size and shape
export interface ButtonProps {
    size: 'small' | 'medium' | 'large',
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full',
    onClick?: () => void;
    children: React.ReactNode // Button Text
}

// interface for a PostProps for a PostCard component
export interface PostProps {
    title: string,
    content: string,
    userId: string,
}

// interface for a Post from an api
export interface Post {
    title: string,
    body: string,
    userId: number,
    id: number,
}