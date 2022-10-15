import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Content.module.scss';
import UseEffectComponent from './../UseEffectComponent/UseEffectComponent';
// import UseContextComponent from './../UseContextComponent/UseContextComponent';
import UseReducerComponent from './../UseReducerComponent/UseReducerComponent';
import UseCallbackComponent from './../UseCallbackComponent/UseCallbackComponent';
import UseMemoComponent from './../UseMemoComponent/UseMemoComponent';
import UseRefComponent from './../UseRefComponent/UseRefComponent';
import UseImperativeHandleComponent from './../UseImperativeHandleComponent/UseImperativeHandleComponent';
import UseLayoutEffectComponent from './../UseLayoutEffectComponent/UseLayoutEffectComponent';
import UseDebugValueComponent from './../UseDebugValueComponent/UseDebugValueComponent';
import UseDeferredValueComponent from './../UseDeferredValueComponent/UseDeferredValueComponent';
import UseTransitionComponent from './../UseTransitionComponent/UseTransitionComponent';
import UseIdComponent from './../UseIdComponent/UseIdComponent';
import UseSyncExternalStorageComponent from './../UseSyncExternalStorageComponent/UseSyncExternalStorageComponent';
import UseInsertionEffect from './../UseInsertionEffect/UseInsertionEffect';
import UseStateComponent from './../UseStateComponent/UseStateComponent';

export default function Content() {
    return (
        <div className={s.ContentWrapper}>
            <Routes>
                <Route index element={<UseStateComponent />} />
                <Route path="use-state" element={<UseStateComponent />} />
                <Route path="use-effect" element={<UseEffectComponent />} />
                {/* <Route path="use-context" element={<UseContextComponent />} /> */}
                <Route path="use-reducer" element={<UseReducerComponent />} />
                <Route path="use-callback" element={<UseCallbackComponent />} />
                <Route path="use-memo" element={<UseMemoComponent />} />
                <Route path="use-ref" element={<UseRefComponent />} />
                <Route
                    path="use-imperative-handle"
                    element={<UseImperativeHandleComponent />}
                />
                <Route
                    path="use-layout-effect"
                    element={<UseLayoutEffectComponent />}
                />
                <Route
                    path="use-debug-value"
                    element={<UseDebugValueComponent />}
                />
                <Route
                    path="use-deferred-value"
                    element={<UseDeferredValueComponent />}
                />
                <Route
                    path="use-transition"
                    element={<UseTransitionComponent />}
                />
                <Route path="use-id" element={<UseIdComponent />} />
                <Route
                    path="use-sync-external-storage"
                    element={<UseSyncExternalStorageComponent />}
                />
                <Route
                    path="use-insertion-effect"
                    element={<UseInsertionEffect />}
                />
            </Routes>
        </div>
    );
}
