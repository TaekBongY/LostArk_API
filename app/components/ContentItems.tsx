// app/components/ContentItems.tsx
import React, { useEffect, useRef, useState } from 'react';

const ContentItems: React.FC = () => {
    const masonryContainerRef = useRef(null);
    const [Masonry, setMasonry] = useState<any>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('masonry-layout')
                .then(mod => {
                    setMasonry(() => mod.default);
                })
                .catch(error => {
                    console.error("Failed to load Masonry-layout:", error);
                });
        }
    }, []);

    useEffect(() => {
        if (Masonry && masonryContainerRef.current) {
            const masonry = new Masonry(masonryContainerRef.current, {
                itemSelector: '.masonry-item',
                columnWidth: '.masonry-item',
                percentPosition: true,
                gutter: 6,
                transitionDuration: '0.4s',
            });

            masonry.layout();

            return () => {
                masonry.destroy();
            };
        }
    }, [Masonry]);

    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-6">
            <div className="container mx-auto">
                <div ref={masonryContainerRef} className="masonry-grid">

                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 1</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">짧은 카드 내용입니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 2</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">두 번째 카드입니다. 이 카드는 내용이 조금 더 길어서 높이가 다를 수 있습니다. Masonry는 이렇게 내용이 달라져도 빈 공간을 채워 효율적으로 배치합니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 3</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">세 번째 카드 내용입니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 4</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">네 번째 카드입니다. 이 카드는 이전 카드들보다 내용이 훨씬 길어서 높이가 많이 다릅니다. Masonry는 이렇게 높이가 다른 아이템들이 있을 때도 빈 공간을 찾아 위로 끌어올려 배치합니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 5</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">다섯 번째 카드 내용입니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 6</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">여섯 번째 카드 내용입니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 7</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">추가된 짧은 카드 내용입니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 8</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">여덟 번째 카드. 이번에는 좀 더 긴 내용으로 배치 테스트.</p>
                        <p className="text-xs text-gray-500 mt-2">추가 내용 줄.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 9</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">아홉 번째 카드 내용.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 10</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">열 번째 카드입니다. 내용이 길어질수록 Masonry의 진가가 발휘됩니다.</p>
                        <p className="text-xs text-gray-500 mt-2">레이아웃 테스트를 위한 더 많은 텍스트.</p>
                        <p className="text-xs text-gray-500">아주 긴 내용이 들어갈 수도 있습니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 11</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">열한 번째 카드.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 12</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">열두 번째 카드 내용입니다. 중간 길이.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 13</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">짧은 카드입니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 14</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">열네 번째 카드. 내용은 짧지만 너비 테스트.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 15</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">열다섯 번째 카드. 내용이 길어질 예정.</p>
                        <p className="text-xs text-gray-500 mt-2">추가 내용.</p>
                        <p className="text-xs text-gray-500">또 다른 줄.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 16</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">열여섯 번째 카드.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 17</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">열일곱 번째 카드. 긴 내용.</p>
                        <p className="text-xs text-gray-500 mt-2">추가 내용 줄입니다.</p>
                        <p className="text-xs text-gray-500">이 정도면 충분히 길 겁니다.</p>
                    </div>
                    <div
                        className="masonry-item bg-white dark:bg-gray-700 p-4 rounded shadow mb-4"
                        style={{ width: "19%" }}
                    >
                        <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카드 제목 18</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300">마지막 카드입니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentItems;