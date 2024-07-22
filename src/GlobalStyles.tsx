import { css, Global } from "@emotion/react";
import { FC } from "react";

export const GlobalStyles: FC = () => {
	return (
		<Global
			styles={css`
				* {
					padding: 0;
					margin: 0;
					min-width: 0;
					min-height: 0;
					box-sizing: border-box;
				}

				html {
					font-family: "Noto Sans", sans-serif;
					font-size: 62.5%;
				}

				body {
					font-size: 1.6rem;
					color: white;
					overflow: hidden;
				}
			`}
		/>
	);
};

export default GlobalStyles;
