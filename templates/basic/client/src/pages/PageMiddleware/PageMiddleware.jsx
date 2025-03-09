import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const RedirectIfNotAuthenticated = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (!token) {
            navigate('/login'); // Вписать здесь, куда перенаправить, если НЕ авторизован
        }
    }, [navigate]);

    return children;
};

export const RedirectIfAuthenticated = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');

        if (token) {
            navigate('/'); // Вписать здесь, куда перенаправить, если авторизован
        }
    }, [navigate]);

    return children;
};
