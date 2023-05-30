import React from "react";

export default function Resume() {
	return (
		<object
			data="/assets/Ari_Kamat_Resume.pdf#view=FitV"
			type="application/pdf"
			className="w-full h-full"
			style={{ height: "100vh" }}
		>
			<embed
				src="https://drive.google.com/file/d/1dejaFt3ovkErPFNGLrImvbg4xir3bF3i/preview?usp=sharing"
				className="w-full h-full"
				style={{ height: "100vh" }}
			/>
		</object>
	);
}
