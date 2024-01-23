'use react';
import axios from 'axios';
import React, { useState } from 'react';
import nookies from 'nookies';
import iconeCaneta from '../../assets/icone_caneta.svg';
import Image from 'next/image';

const ImageUpload = () => {
    const [message, setMessage] = useState<string | null>(null);
    const userToken = nookies.get()['@swift-stock: user-token'];

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const formData = new FormData();
        formData.append(
            'operations',
            JSON.stringify({
                query: `
                mutation ($file: Upload!) {
                    updateImage(input: { file: $file }) {
                        message
                    }
                }
            `,
                variables: {
                    file: null,
                },
            }),
        );
        formData.append(
            'map',
            JSON.stringify({
                '0': ['variables.file'],
            }),
        );
        formData.append('0', file);

        try {
            const response = await axios.post('https://api.swiftstock.com.br/graphql', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + userToken,
                },
            });

            if (response.data.errors) {
                setMessage('Erro: ' + response.data.errors[0].message);
            } else {
                setMessage(response.data.data.updateImage.message);
            }
        } catch (error) {
            setMessage('Erro na requisição: ' + error.message);
        }
    };

    return (
        <label className="cursor-pointer">
            <Image src={iconeCaneta} alt="caneta" width={20} height={20} color="white" />
            <input type="file" required onChange={handleFileChange} className="hidden" />
        </label>
    );
};

export default ImageUpload;
