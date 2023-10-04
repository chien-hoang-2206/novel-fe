import { useCallback, useEffect, useRef, useState } from 'react';
import { debounce } from 'lodash';

import Factory from 'redux/app/factory';
import Constants from 'utils/Constants';

export default function useSearchAsync(
    searchType,
    id,
    delay = Constants.DEBOUNCE_TIME_SEARCH,
) {
    const defaultData = useRef([]);
    const [data, setData] = useState([]);

    const fetchData = async (params) => {
        let request;
        if (searchType === Constants.SEARCH_TYPE.VENDOR.CODE) {
            request = () => Factory.requestDataVendors(params);
        }
        if (searchType === Constants.SEARCH_TYPE.EMPLOYEE.CODE) {
            request = () => Factory.requestDataEmployee(params);
        }
        const response = await request();
        const result = response[Constants.SEARCH_TYPE[searchType]?.RESP_KEY]?.map(
            (vendor) => {
                let label = vendor[Constants.SEARCH_TYPE[searchType]?.LABEL]
                if (Constants.SEARCH_TYPE[searchType]?.LABEL_1) {
                    label = `${label} - ${vendor[Constants.SEARCH_TYPE[searchType]?.LABEL_1]}`;
                }
                if (Constants.SEARCH_TYPE[searchType]?.LABEL_2) {
                    label = `${label} ${vendor[Constants.SEARCH_TYPE[searchType]?.LABEL_2]}`;
                }
                return {
                    key: vendor[Constants.SEARCH_TYPE[searchType]?.KEY],
                    label,
                    ...(
                        Constants.SEARCH_TYPE[searchType] === Constants.SEARCH_TYPE.VENDOR ?
                            {
                                phone: vendor['Phone'],
                                category: vendor["CategorySupplierId"],
                                commune: vendor['CommuneId'],
                                province: vendor['ProvinceId'],
                                address: vendor['Address'],
                                district: vendor['DistrictId'],
                            }
                            : {
                                DepartmentName: vendor["DepartmentName"],
                                BranchName: vendor['BranchName'],
                                EmployeeId: vendor['EmployeeId'],
                            }
                    )

                }
            },
        );
        return result;
    };
    useEffect(() => {
        const getDefaultDataAsync = async () => {
            let params = {
                PageSize: Constants.SEARCH_TYPE[searchType] === Constants.SEARCH_TYPE.VENDOR ? 5 : 10,
            };
            if (id) {
                params = {
                    ...params,
                    [Constants.SEARCH_TYPE[searchType]?.LOAD_KEY]: id,
                };
            }
            const result = await fetchData(params);
            defaultData.current = result;
            setData(result);
        };
        getDefaultDataAsync();
    }, [id]);

    const onClear = useCallback(() => {
        setData(defaultData.current);
    }, [defaultData]);

    const searchOptions = useCallback(
        async (value) => {
            try {
                if (value === '') {
                    onClear();
                    return;
                }
                const params = {
                    PageSize: Constants.SEARCH_TYPE[searchType] === Constants.SEARCH_TYPE.VENDOR ? 10 : 50,
                    ...(value
                        ? { [Constants.SEARCH_TYPE[searchType]?.SEARCH_KEY]: value }
                        : {}),
                };
                const result = await fetchData(params);
                setData(result);
            } catch {
                setData(defaultData.current);
            }
        },
        [defaultData],
    );
    const onInputChange = useCallback(
        debounce((nextValue) => searchOptions(nextValue), delay),
        [],
    );

    return { data, onInputChange, onClear };
}
