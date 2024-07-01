// publiciteService.ts

import { useState } from 'react';
import getRestaurantPubs from '../api/apiPublicite';
import { useModalContext } from '../../context/ModalContext';

export const usePubliciteService = () => {
    const [publicites, setPublicites] = useState<any[]>([]);
    const [isLoad, setIsLoad] = useState(false);
    const {modal, setModal} = useModalContext();
    
    const fetchData = async (restaurantId: number) => {
        try {
            setIsLoad(true);
            const allPub = await getRestaurantPubs(restaurantId);
            if (allPub.status === 200) { 
                setIsLoad(false);
                setPublicites(allPub.data);
                setModal(false);
                console.log("Data fetched successfully:", allPub.data);
            } else {
                console.log("Non-200 status received:", allPub.status);
            }
        } catch (error) {
            setIsLoad(true);
            console.log("Error fetching data:", error);
        }
    };

    return { publicites, isLoad, fetchData };
};
