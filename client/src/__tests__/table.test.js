import React from "react";
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store/store';
import TableComponent from "../components/Table/Table";
import '@testing-library/jest-dom/extend-expect';

describe('TableComponent', () => {
    it('should render a list of filenames', () => {
        const filesData = {
            files: [
                'test1.csv',
                'test2.csv',
                'test3.csv',
                'test18.csv',
                'test4.csv',
                'test5.csv',
                'test6.csv',
                'test9.csv',
                'test15.csv'
            ]
        };

        render(
            <Provider store={store}>
                <TableComponent filesData={filesData} />
            </Provider>
        )
    })

    it('should render an element', () => {
        const fileData = {
            "file": "test2.csv",
            "lines": [
                {
                    "text": "D",
                    "number": 9,
                    "hex": "d991e538c202ba31724b5848dab8e55f"
                }
            ]
        }

        render(
            <Provider store={store}>
                <TableComponent filesData={fileData} />
            </Provider>
        )
    })

    it('should render a list of files', () => {
        const fileData = {
            "file": "test3.csv",
            "lines": [
                {
                    "text": "nzPOtdDaPnxCKKxmRTeUa",
                    "number": 5145708280,
                    "hex": "e6f829b3ea66ad076c73c9b40cbeba9e"
                },
                {
                    "text": "YqLUOUrCsEtFyJjQxPcOkJS",
                    "number": 3691,
                    "hex": "a22718180113e637a078f0c0e506106b"
                },
                {
                    "text": "eCEaiQSUApaDzqxFeStTP",
                    "number": 765,
                    "hex": "07c1329a78da8ac794b0411c8abc8670"
                }
            ]
        }

        render(
            <Provider store={store}>
                <TableComponent filesData={fileData} />
            </Provider>
        )
    })
})