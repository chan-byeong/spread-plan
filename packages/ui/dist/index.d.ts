import React from 'react';

type CardProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
declare const Card: React.FC<CardProps>;

export { Card };
