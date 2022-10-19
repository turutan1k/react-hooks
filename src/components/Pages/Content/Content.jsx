import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Content.module.scss';
import UseEffectComponent from './../Hooks/UseEffectComponent/UseEffectComponent';
import UseContextComponent from './../Hooks/UseContextComponent/UseContextComponent';
import UseReducerComponent from './../Hooks/UseReducerComponent/UseReducerComponent';
import UseCallbackComponent from './../Hooks/UseCallbackComponent/UseCallbackComponent';
import UseMemoComponent from './../Hooks/UseMemoComponent/UseMemoComponent';
import UseRefComponent from './../Hooks/UseRefComponent/UseRefComponent';
import UseImperativeHandleComponent from './../Hooks/UseImperativeHandleComponent/UseImperativeHandleComponent';
import UseLayoutEffectComponent from './../Hooks/UseLayoutEffectComponent/UseLayoutEffectComponent';
import UseDebugValueComponent from './../Hooks/UseDebugValueComponent/UseDebugValueComponent';
import UseDeferredValueComponent from './../Hooks/UseDeferredValueComponent/UseDeferredValueComponent';
import UseTransitionComponent from './../Hooks/UseTransitionComponent/UseTransitionComponent';
import UseIdComponent from './../Hooks/UseIdComponent/UseIdComponent';
import UseStateComponent from './../Hooks/UseStateComponent/UseStateComponent';
import Home from '../Home/Home';
import Hookbar from './../../Navbar/Hookbar';
import Docbar from './../../Navbar/Docbar';
import Accessibility from './../Documentation/Accessibility/Accessibility';
import CodeSplitting from './../Documentation/CodeSplitting/CodeSplitting';
import Context from './../Documentation/Context/Context';
import ErrorBoundaries from './../Documentation/ErrorBoundaries/ErrorBoundaries';
import ForwardingRefs from './../Documentation/ForwardingRefs/ForwardingRefs';
import HigherOrderComponents from './../Documentation/HigherOrderComponents/HigherOrderComponents';
import IntegratingWithOtherLibraries from './../Documentation/IntegratingWithOtherLibraries/IntegratingWithOtherLibraries';
import JSXInDepth from './../Documentation/JSXInDepth/JSXInDepth';
import OptimizingPerformance from './../Documentation/OptimizingPerformance/OptimizingPerformance';
import ReactWithoutES6 from './../Documentation/ReactWithoutES6/ReactWithoutES6';
import ReactWithoutJSX from './../Documentation/ReactWithoutJSX/ReactWithoutJSX';
import Reconciliation from './../Documentation/Reconciliation/Reconciliation';
import RefsAndTheDOM from './../Documentation/RefsAndTheDOM/RefsAndTheDOM';
import StaticTypeChecking from './../Documentation/StaticTypeChecking/StaticTypeChecking';
import StrictMode from './../Documentation/StrictMode/StrictMode';
import TypeCheckingWithPropTypes from './../Documentation/TypeCheckingWithPropTypes/TypeCheckingWithPropTypes';
import UncontrolledComponents from './../Documentation/UncontrolledComponents/UncontrolledComponents';
import WebComponents from './../Documentation/WebComponents/WebComponents';
import Fragments from './../Documentation/Fragments/Fragments';
import Portals from './../Documentation/Portals/Portals';
import RenderProps from './../Documentation/RenderProps/RenderProps';
import Profiler from './../Documentation/Profiler/Profiler';

export default function Content() {
    return (
        <div className={s.ContentWrapper}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<Home />} />
                <Route path="hooks" element={<Hookbar />}>
                    <Route path="use-state" element={<UseStateComponent />} />
                    <Route path="use-effect" element={<UseEffectComponent />} />
                    <Route
                        path="use-context"
                        element={<UseContextComponent />}
                    />
                    <Route
                        path="use-reducer"
                        element={<UseReducerComponent />}
                    />
                    <Route
                        path="use-callback"
                        element={<UseCallbackComponent />}
                    />
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
                </Route>
                <Route path="documentation" element={<Docbar />}>
                    <Route path="accessibility" element={<Accessibility />} />
                    <Route path="code-splitting" element={<CodeSplitting />} />
                    <Route path="context" element={<Context />} />
                    <Route
                        path="error-boundaries"
                        element={<ErrorBoundaries />}
                    />
                    <Route
                        path="forwarding-refs"
                        element={<ForwardingRefs />}
                    />
                    <Route path="fragments" element={<Fragments />} />
                    <Route
                        path="higher-order-components"
                        element={<HigherOrderComponents />}
                    />
                    <Route
                        path="integrating-with-other-libraries"
                        element={<IntegratingWithOtherLibraries />}
                    />
                    <Route path="jsx-in-depth" element={<JSXInDepth />} />
                    <Route
                        path="optimizing-performance"
                        element={<OptimizingPerformance />}
                    />
                    <Route path="portals" element={<Portals />} />
                    <Route path="profiler" element={<Profiler />} />
                    <Route
                        path="react-without-es6"
                        element={<ReactWithoutES6 />}
                    />
                    <Route
                        path="react-without-jsx"
                        element={<ReactWithoutJSX />}
                    />
                    <Route path="reconsiliation" element={<Reconciliation />} />
                    <Route
                        path="refs-and-the-dom"
                        element={<RefsAndTheDOM />}
                    />
                    <Route path="render-props" element={<RenderProps />} />
                    <Route
                        path="static-type-checking"
                        element={<StaticTypeChecking />}
                    />
                    <Route path="strict-mode" element={<StrictMode />} />
                    <Route
                        path="typechecking-with-prop-types"
                        element={<TypeCheckingWithPropTypes />}
                    />
                    <Route
                        path="uncontrolled-components"
                        element={<UncontrolledComponents />}
                    />
                    <Route path="web-components" element={<WebComponents />} />
                </Route>
            </Routes>
        </div>
    );
}
