import React from 'react';
import { createContext } from 'react';

const counterContext = createContext(5);  /// default value for the context

export default counterContext;