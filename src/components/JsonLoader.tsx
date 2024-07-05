import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@/store';
import {setJson} from "@/actions/JsonActions";
import {RootObject} from "@/entities/RootObject";

const JsonLoader: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const loadJson = async () => {
            try {
                const response: Response = await fetch('./data.json');
                const jsonData: Promise<RootObject> = await response.json();
                dispatch(setJson(jsonData));
            } catch (error) {
                console.error('Failed to load JSON data:', error);
            }
        };

        loadJson().then(() => {
            console.log('JSON loaded')
        });
    }, [dispatch]);

    return null;
};

export default JsonLoader;
