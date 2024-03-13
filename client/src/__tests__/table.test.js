import React from "react";
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import TableComponent from "../components/Table/Table";
import '@testing-library/jest-dom/extend-expect';

describe('TableComponent Test', () => {
    test('render file data correctly', () => {
        const fileData = {
            file: "test3.csv",
            lines: [
                {
                    text: "xfDaNEfMkbkFWqJCHFEkgEtT",
                    number: 6430,
                    hex: "7469c1b9ed99c4f667edfcb9b1b2e031"
                },
                {
                    text: "nqhezQjSLzMmNvzexQZIohsb",
                    number: 13,
                    hex: "54de68edcc3c7f8df19bd08301ba9b57"
                },
                {
                    text: "spsVusSUTspCftEGqH",
                    number: 968571972,
                    hex: "0a2b6af035d66001b9277090047b1146"
                }
            ]
        };

        render(
            <Provider store={store}>
                <TableComponent filesData={fileData} />
            </Provider>
        )
    })
})