import React from 'react';
import { MangaGallery } from '../../components/MangaGallery';

interface Props {}

export const MainScreen: React.FC = () => {
    return (
        <MangaGallery title="Манга сезона" />
    );
};
