// Next imports
import { useRouter } from "next/router";

// React imports
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		router.replace("/capacitacion");
	}, [router]);

	return null;
}
