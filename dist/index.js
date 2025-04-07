import require$$0, { useState, useRef, useEffect } from 'react';

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(
	      type,
	      key,
	      self,
	      source,
	      owner,
	      props,
	      debugStack,
	      debugTask
	    ) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        self,
	        source,
	        getOwner(),
	        maybeKey,
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      "object" === typeof node &&
	        null !== node &&
	        node.$$typeof === REACT_ELEMENT_TYPE &&
	        node._store &&
	        (node._store.validated = 1);
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      "react-stack-bottom-frame": function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const getSizeStyles = (size) => {
    switch (size) {
        case 'small':
            return { padding: '6px 12px', fontSize: '14px' };
        case 'large':
            return { padding: '14px 28px', fontSize: '18px' };
        default:
            return { padding: '10px 20px', fontSize: '16px' };
    }
};
const getVariantStyles = (variant) => {
    switch (variant) {
        case 'secondary':
            return { background: '#666', color: '#fff' };
        case 'danger':
            return { background: '#e00', color: '#fff' };
        case 'outline':
            return {
                background: 'transparent',
                color: '#0070f3',
                border: '2px solid #0070f3',
            };
        default:
            return { background: '#0070f3', color: '#fff' };
    }
};
const Button = ({ label, onClick, size = 'medium', variant = 'primary', loading = false, disabled = false, fullWidth = false, bgColor, textColor, }) => {
    const sizeStyles = getSizeStyles(size);
    const variantStyles = getVariantStyles(variant);
    return (jsxRuntimeExports.jsxs("button", { style: {
            ...sizeStyles,
            ...variantStyles,
            background: bgColor || variantStyles.background,
            color: textColor || variantStyles.color,
            borderRadius: '6px',
            cursor: disabled || loading ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1,
            width: fullWidth ? '100%' : 'auto',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
        }, disabled: disabled || loading, onClick: onClick, children: [loading && (jsxRuntimeExports.jsx("span", { style: {
                    width: '16px',
                    height: '16px',
                    border: `2px solid ${textColor || '#fff'}`,
                    borderTop: '2px solid transparent',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                } })), label, jsxRuntimeExports.jsx("style", { children: `
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        ` })] }));
};

const Input = require$$0.forwardRef(({ label, labelClassName, containerClassName, containerStyle, helperText, error, leftIcon, rightIcon, className, style, ...props }, ref) => {
    return (jsxRuntimeExports.jsxs("div", { className: containerClassName, style: {
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '1rem',
            ...containerStyle,
        }, children: [label && (jsxRuntimeExports.jsx("label", { htmlFor: props.id, className: labelClassName, style: { marginBottom: '0.5rem' }, children: label })), jsxRuntimeExports.jsxs("div", { style: { position: 'relative', display: 'flex', alignItems: 'center' }, children: [leftIcon && (jsxRuntimeExports.jsx("div", { style: { position: 'absolute', left: '10px' }, children: leftIcon })), jsxRuntimeExports.jsx("input", { ref: ref, ...props, className: className, style: {
                            padding: leftIcon || rightIcon ? '10px 40px' : '10px 16px',
                            border: `1px solid ${error ? 'red' : '#ccc'}`,
                            borderRadius: '6px',
                            width: '100%',
                            fontSize: '16px',
                            ...style,
                        } }), rightIcon && (jsxRuntimeExports.jsx("div", { style: { position: 'absolute', right: '10px' }, children: rightIcon }))] }), helperText && !error && (jsxRuntimeExports.jsx("small", { style: { color: '#666', marginTop: '4px' }, children: helperText })), error && jsxRuntimeExports.jsx("small", { style: { color: 'red', marginTop: '4px' }, children: error })] }));
});
Input.displayName = 'Input';

const Card = ({ title, subtitle, description, image, avatar, badge, tag, tags = [], status, progress, theme = 'light', footer, actions, onClick, width, hlight, responsive = false, loading = false, className = '', height, }) => {
    const [hovered, setHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [animatedProgress, setAnimatedProgress] = useState(0);
    const progressRef = useRef(null);
    useEffect(() => {
        if (typeof progress === 'number') {
            let frame = 0;
            const totalFrames = 60;
            const easeOut = (t) => 1 - Math.pow(1 - t, 4);
            const animate = () => {
                frame++;
                const progressValue = easeOut(frame / totalFrames) * progress;
                setAnimatedProgress(Math.min(progress, progressValue));
                if (frame < totalFrames)
                    requestAnimationFrame(animate);
            };
            animate();
        }
    }, [progress]);
    const isDark = theme === 'dark';
    const colors = {
        bg: isDark ? '#111' : '#fff',
        border: isDark ? '#2a2a2a' : '#e2e2e2',
        text: isDark ? '#f4f4f4' : '#1a1a1a',
        subtext: isDark ? '#aaa' : '#555',
        tagBg: isDark ? '#1e1e1e' : '#f2f2f2',
        progress: '#4f46e5',
    };
    const statusColor = {
        success: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        neutral: '#9ca3af',
    };
    const handleClick = () => {
        if (onClick) {
            setClicked(true);
            onClick();
            setTimeout(() => setClicked(false), 150);
        }
    };
    if (loading) {
        return (jsxRuntimeExports.jsx("div", { style: {
                borderRadius: 20,
                backgroundColor: isDark ? '#1e1e1e' : '#f1f1f1',
                height: 300,
                width: '100%',
                animation: 'pulse 1.5s infinite ease-in-out',
            } }));
    }
    return (jsxRuntimeExports.jsxs("div", { onClick: handleClick, onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), role: onClick ? 'button' : 'region', "aria-label": `Card for ${title}`, className: className, style: {
            background: colors.bg,
            border: `1px solid ${colors.border}`,
            borderRadius: 20,
            padding: 20,
            width: responsive ? '100%' : typeof width === 'number' ? `${width}px` : width || '100%',
            height: typeof height === 'number' ? `${height}px` : height, // ✅ ADDED
            boxShadow: hovered
                ? isDark
                    ? '0 12px 24px rgba(0,0,0,0.4)'
                    : '0 10px 24px rgba(0,0,0,0.08)'
                : typeof hlight === 'number'
                    ? `0 0 0 3px rgba(79, 70, 229, ${hlight})`
                    : hlight === true
                        ? '0 0 0 3px rgba(79, 70, 229, 0.3)'
                        : 'none',
            transform: hovered ? 'scale(1.02)' : clicked ? 'scale(0.98)' : 'scale(1)',
            transition: 'all 0.25s ease',
            cursor: onClick ? 'pointer' : 'default',
            fontFamily: 'Inter, sans-serif',
        }, children: [jsxRuntimeExports.jsxs("div", { style: { display: 'flex', alignItems: 'center', marginBottom: 16 }, children: [avatar && (jsxRuntimeExports.jsx("img", { src: avatar, alt: "User avatar", style: {
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            marginRight: 16,
                            objectFit: 'cover',
                        }, loading: "lazy" })), jsxRuntimeExports.jsxs("div", { style: { flex: 1 }, children: [jsxRuntimeExports.jsx("h2", { style: {
                                    margin: 0,
                                    fontSize: 18,
                                    color: colors.text,
                                    minHeight: 48,
                                    lineHeight: '24px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                }, children: title }), subtitle && (jsxRuntimeExports.jsx("p", { style: { margin: '4px 0 0', fontSize: 14, color: colors.subtext }, children: subtitle }))] }), status && (jsxRuntimeExports.jsx("div", { style: {
                            width: 10,
                            height: 10,
                            backgroundColor: statusColor[status],
                            borderRadius: '50%',
                            marginLeft: 10,
                        }, title: status })), badge && (jsxRuntimeExports.jsx("span", { style: {
                            backgroundColor: '#4f46e5',
                            color: '#fff',
                            fontSize: 11,
                            padding: '4px 10px',
                            borderRadius: 8,
                            marginLeft: 8,
                        }, children: badge }))] }), image && (jsxRuntimeExports.jsx("img", { src: image, alt: title + ' image', loading: "lazy", style: {
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    borderRadius: 12,
                    marginBottom: 16,
                } })), description && (jsxRuntimeExports.jsx("p", { style: { fontSize: 15, color: colors.subtext, marginBottom: 16 }, children: description })), jsxRuntimeExports.jsxs("div", { style: { display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }, children: [tag && (jsxRuntimeExports.jsx("span", { style: {
                            backgroundColor: colors.tagBg,
                            color: colors.subtext,
                            fontSize: 12,
                            padding: '4px 10px',
                            borderRadius: 6,
                        }, children: tag })), tags.map((t, i) => (jsxRuntimeExports.jsx("span", { style: {
                            backgroundColor: colors.tagBg,
                            color: colors.subtext,
                            fontSize: 12,
                            padding: '4px 10px',
                            borderRadius: 6,
                        }, children: t }, i)))] }), typeof progress === 'number' && (jsxRuntimeExports.jsx("div", { style: { marginTop: 10, marginBottom: 16 }, children: jsxRuntimeExports.jsx("div", { style: {
                        height: 6,
                        width: '100%',
                        backgroundColor: isDark ? '#2e2e2e' : '#e4e4e4',
                        borderRadius: 4,
                        overflow: 'hidden',
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                        background: 'rgba(255, 255, 255, 0.1)',
                    }, children: jsxRuntimeExports.jsx("div", { ref: progressRef, style: {
                            width: `${animatedProgress}%`,
                            height: '100%',
                            backgroundColor: colors.progress,
                            borderRadius: 4,
                            transition: 'width 1.6s ease',
                        } }) }) })), actions && (jsxRuntimeExports.jsx("div", { style: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 10,
                    marginTop: 16,
                }, children: actions })), footer && jsxRuntimeExports.jsx("div", { style: { marginTop: 16 }, children: footer })] }));
};

export { Button, Card, Input };
//# sourceMappingURL=index.js.map
