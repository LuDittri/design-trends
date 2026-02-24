import fs from 'fs';

async function testDL() {
    const url = "https://external-preview.redd.it/eHZrZmtvMWU3OGxnMYC8e2KNN2ipU_YoLwJ4qu_lsbXUMsf2zY7PZoXUMFYX.png?format=pjpg&auto=webp&s=da3861653499983a98ad9fa5499d8f644f4cbfb0";
    const res = await fetch(url);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync('test_ext.jpg', Buffer.from(buffer));
    console.log(`Saved test_ext.jpg. Size: ${buffer.byteLength} bytes.`);
}
testDL();
