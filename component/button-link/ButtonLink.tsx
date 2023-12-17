import React from "react";
import clsx from "clsx";
import styles from "./button-linke.module.scss";
import {Link} from "react-router-dom";

interface Props {
    className?: string,
    href: string,
    children?: React.ReactNode,
}

export function ButtonLink(props: Props) {

    const {
        href,
        children,
        className,
        ...otherProps
    } = props

    return (
        <Link
            className={clsx(
                styles.button,
                className
            )}
            to={href}
            {...otherProps}
        >
            {children}
        </Link>
    )
}