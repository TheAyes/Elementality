import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes, FC } from "react";

interface MenuEntryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	caption: string;
	isDisabled?: boolean;

	[key: string]: any;
}

const StyledMenuEntry = styled("button")<Partial<MenuEntryProps>>(() => {
	const theme = useTheme();
	return css`
		background: none;
		border: none;

		width: 8rem;

		padding: 6px;
		text-align: left;

		color: inherit;

		&:hover {
			background: rgba(255, 255, 255, 0.2);
		}

		&:active {
			background: rgba(255, 255, 255, 0.1);
		}

		&.disabled {
			pointer-events: none;
		}
	`;
});

export const MenuEntry: FC<MenuEntryProps> = ({
	caption,
	isDisabled = false,
	className,
	...props
}) => {
	return (
		<StyledMenuEntry
			{...props}
			className={isDisabled ? `${className} disabled` : className}
		>
			{caption}
		</StyledMenuEntry>
	);
};

export default MenuEntry;
