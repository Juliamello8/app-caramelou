import * as React from 'react';

import { create } from 'apisauce'

const api = create({
    // baseURL: 'http://localhost:3000',
    baseURL: 'http://192.168.1.14:3000',
    // baseURL: 'http://192.168.100.211:3000',
});

// api.addResponseTransform(response => {
//     if(!response.ok) throw response
// });

export default api;