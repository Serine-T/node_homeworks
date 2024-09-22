interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const mockApiUrl = "https://jsonplaceholder.typicode.com/posts/1";

const fetchData = async (): Promise<IPost> => {
    try {
        const response = await fetch(mockApiUrl);
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data: IPost = await response.json();
        return data;
    } catch (error) {
        console.error("Failed:", error);
        throw error;
    }
}

const displayData = async () => {
    try {
        const data = await fetchData();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.error("Error in displayData:", error);
    }
}

displayData();
