export const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            resolve(reader.result?.toString().split(',')[1] ?? '');
        };
        reader.readAsDataURL(blob);
    });
};