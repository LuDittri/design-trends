import fs from 'fs';

async function testDL() {
    const url = "https://external-preview.redd.it/eHZrZmtvMWU3OGxnMYC8e2KNN2ipU_YoLwJ4qu_lsbXUMsf2zY7PZoXUMFYX.png?width=1080&crop=smart&format=pjpg&auto=webp&s=d8fe3e64c7cf068e2b8cd9ee0283a38525b784ef";
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync('test_1080.jpg', Buffer.from(buffer));
    console.log(`Saved test_1080.jpg. Size: ${buffer.byteLength} bytes.`);
}
testDL();
