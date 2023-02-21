import NavBar from '../UI/NavBar'
import Option from '../UI/Option';
import SVG from '../SVG';

const Main = () => {
    return (
        <div>
            <NavBar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Option route='/reset'>
                            <SVG viewBox="0 0 99 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.6667 20.8699C39.1321 19.5303 44.0594 18.6543 49.5 18.6543C74.0854 18.6543 94 38.6463 94 63.3272C94 88.008 74.0854 108 49.5 108C24.9146 108 5 88.008 5 63.3272C5 54.1556 7.77163 45.6023 12.4937 38.4917M43.1355 5L28.3022 22.1066L45.5992 34.7819" stroke="black" strokeOpacity="0.25" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                            </SVG>
                            <h4 style={{"textAlign":"center", "textDecoration":"none"}}>Reseteo de urnas</h4>
                        </Option>
                    </div>
                    <div className='col-lg-6'>
                        <Option>
                            <SVG viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M99.875 127.781H41.125C15.2163 127.781 7.34375 119.909 7.34375 94V47C7.34375 21.0913 15.2163 13.2188 41.125 13.2188H99.875C125.784 13.2188 133.656 21.0913 133.656 47V94C133.656 119.909 125.784 127.781 99.875 127.781ZM41.125 22.0312C20.0925 22.0312 16.1562 26.0263 16.1562 47V94C16.1562 114.974 20.0925 118.969 41.125 118.969H99.875C120.908 118.969 124.844 114.974 124.844 94V47C124.844 26.0263 120.908 22.0312 99.875 22.0312H41.125Z" fill="black" fillOpacity="0.25" />
                                <path d="M111.625 51.4055H82.2499C79.8411 51.4055 77.8436 49.408 77.8436 46.9993C77.8436 44.5905 79.8411 42.593 82.2499 42.593H111.625C114.034 42.593 116.031 44.5905 116.031 46.9993C116.031 49.408 114.034 51.4055 111.625 51.4055ZM111.625 74.9055H88.1249C85.7161 74.9055 83.7186 72.908 83.7186 70.4993C83.7186 68.0905 85.7161 66.093 88.1249 66.093H111.625C114.034 66.093 116.031 68.0905 116.031 70.4993C116.031 72.908 114.034 74.9055 111.625 74.9055ZM111.625 98.4055H99.8749C97.4661 98.4055 95.4686 96.408 95.4686 93.9993C95.4686 91.5905 97.4661 89.593 99.8749 89.593H111.625C114.034 89.593 116.031 91.5905 116.031 93.9993C116.031 96.408 114.034 98.4055 111.625 98.4055ZM49.9374 70.746C41.6536 70.746 34.8974 63.9898 34.8974 55.706C34.8974 47.4223 41.6536 40.666 49.9374 40.666C58.2211 40.666 64.9774 47.4223 64.9774 55.706C64.9774 63.9898 58.2211 70.746 49.9374 70.746ZM49.9374 49.4785C46.5299 49.4785 43.7099 52.2985 43.7099 55.706C43.7099 59.1135 46.5299 61.9335 49.9374 61.9335C53.3449 61.9335 56.1649 59.1135 56.1649 55.706C56.1649 52.2985 53.3449 49.4785 49.9374 49.4785ZM70.4999 100.356C68.2674 100.356 66.3286 98.6523 66.0936 96.361C65.7674 93.2586 64.3783 90.3645 62.1618 88.1694C59.9453 85.9743 57.0378 84.6133 53.9324 84.3173C51.235 84.0823 48.5223 84.0823 45.8249 84.3173C39.4211 84.9048 34.3099 89.9573 33.6636 96.361C33.4286 98.7698 31.2549 100.591 28.8461 100.297C27.6861 100.179 26.6204 99.6049 25.8826 98.7019C25.1448 97.7988 24.795 96.6402 24.9099 95.4798C25.9674 84.9048 34.3686 76.5035 45.0024 75.5635C48.2336 75.2698 51.5236 75.2698 54.7549 75.5635C65.3299 76.5623 73.7899 84.9635 74.8474 95.4798C74.9623 96.6402 74.6125 97.7988 73.8747 98.7019C73.1369 99.6049 72.0712 100.179 70.9111 100.297C70.7936 100.356 70.6174 100.356 70.4999 100.356Z" fill="black" fillOpacity="0.25" />
                            </SVG>
                            <h4 style={{"textAlign":"center", "textDecoration":"none"}}>Editar Candidatos</h4>
                        </Option>
                    </div>
                    <div className='col-lg-6'>
                        <Option route='/presidents'>
                            <SVG viewBox="0 0 128 127" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M116.835 12.8152C114.789 10.504 112.274 8.65588 109.457 7.39442C106.64 6.13296 103.586 5.48717 100.5 5.50019C97.6099 5.49657 94.7475 6.06315 92.0767 7.16747C89.4059 8.27179 86.9792 9.89216 84.9356 11.9358C82.892 13.9794 81.2716 16.4061 80.1673 19.0769C79.063 21.7477 78.4964 24.6101 78.5 27.5002C78.5 31.6252 79.655 35.5302 81.69 38.8302C82.79 40.7002 84.22 42.4052 85.87 43.8352C89.72 47.3552 94.835 49.5002 100.5 49.5002C102.92 49.5002 105.23 49.1152 107.375 48.3452C112.435 46.7502 116.67 43.2852 119.31 38.8302C120.465 36.9602 121.345 34.8152 121.84 32.6152C122.28 30.9652 122.5 29.2602 122.5 27.5002C122.5 21.8902 120.355 16.7202 116.835 12.8152ZM108.695 31.5152H104.625V35.8052C104.625 38.0602 102.755 39.9302 100.5 39.9302C98.245 39.9302 96.375 38.0602 96.375 35.8052V31.5152H92.305C90.05 31.5152 88.18 29.6452 88.18 27.3902C88.18 25.1352 90.05 23.2652 92.305 23.2652H96.375V19.3602C96.375 17.1052 98.245 15.2352 100.5 15.2352C102.755 15.2352 104.625 17.1052 104.625 19.3602V23.2652H108.695C109.789 23.2652 110.838 23.6998 111.612 24.4734C112.385 25.247 112.82 26.2962 112.82 27.3902C112.82 28.4842 112.385 29.5334 111.612 30.307C110.838 31.0806 109.789 31.5152 108.695 31.5152Z" fill="black" fillOpacity="0.25" />
                                <path d="M117 66.0002C117 58.7952 115.625 51.8652 113.04 45.5402C111.335 46.7502 109.41 47.6852 107.375 48.3452C106.77 48.5652 106.165 48.7302 105.505 48.8952C108.823 57.3194 109.617 66.5272 107.791 75.3951C105.965 84.263 101.597 92.4077 95.22 98.8352C93.625 96.8002 91.59 94.9302 89.17 93.3352C74.265 83.3252 49.845 83.3252 34.83 93.3352C32.41 94.9302 30.43 96.8002 28.78 98.8352C20.1165 90.1027 15.2535 78.3012 15.25 66.0002C15.25 40.2052 36.205 19.2502 62 19.2502C67.995 19.2502 73.77 20.4052 79.05 22.4952C79.215 21.8352 79.38 21.2302 79.6 20.5702C80.26 18.5352 81.195 16.6652 82.46 14.9602C75.9617 12.3245 69.0124 10.9795 62 11.0002C31.695 11.0002 7 35.6952 7 66.0002C7 81.9502 13.875 96.3052 24.765 106.37C24.765 106.425 24.765 106.425 24.71 106.48C25.26 107.03 25.92 107.47 26.47 107.965C26.8 108.24 27.075 108.515 27.405 108.735C28.395 109.56 29.495 110.33 30.54 111.1L31.64 111.87C32.685 112.585 33.785 113.245 34.94 113.85C35.325 114.07 35.765 114.345 36.15 114.565C37.25 115.17 38.405 115.72 39.615 116.215C40.055 116.435 40.495 116.655 40.935 116.82C42.145 117.315 43.355 117.755 44.565 118.14C45.005 118.305 45.445 118.47 45.885 118.58C47.205 118.965 48.525 119.295 49.845 119.625C50.23 119.735 50.615 119.845 51.055 119.9C52.595 120.23 54.135 120.45 55.73 120.615C55.95 120.615 56.17 120.67 56.39 120.725C58.26 120.89 60.13 121 62 121C63.87 121 65.74 120.89 67.555 120.725C67.775 120.725 67.995 120.67 68.215 120.615C69.81 120.45 71.35 120.23 72.89 119.9C73.275 119.845 73.66 119.68 74.1 119.625C75.42 119.295 76.795 119.02 78.06 118.58C78.5 118.415 78.94 118.25 79.38 118.14C80.59 117.7 81.855 117.315 83.01 116.82C83.45 116.655 83.89 116.435 84.33 116.215C85.485 115.72 86.64 115.17 87.795 114.565C88.235 114.345 88.62 114.07 89.005 113.85C90.105 113.19 91.205 112.585 92.305 111.87C92.69 111.65 93.02 111.375 93.405 111.1C94.505 110.33 95.55 109.56 96.54 108.735C96.87 108.46 97.145 108.185 97.475 107.965C98.08 107.47 98.685 106.975 99.235 106.48C99.235 106.425 99.235 106.425 99.18 106.37C110.125 96.3052 117 81.9502 117 66.0002Z" fill="black" fillOpacity="0.25" />
                                <path d="M62 38.1152C50.615 38.1152 41.375 47.3552 41.375 58.7402C41.375 69.9052 50.12 78.9802 61.725 79.3102H62.715C68.0539 79.1347 73.1156 76.8908 76.8307 73.0525C80.5459 69.2142 82.6236 64.082 82.625 58.7402C82.625 47.3552 73.385 38.1152 62 38.1152Z" fill="black" fillOpacity="0.25" />
                            </SVG>
                            <h4 style={{"textAlign":"center", "textDecoration":"none"}}>Generar presidentes</h4>
                        </Option>
                    </div>
                    <div className='col-lg-6'>
                        <Option>
                            <SVG viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M76.2501 115.645H45.7501C18.1476 115.645 6.35425 103.852 6.35425 76.2493V45.7493C6.35425 18.1468 18.1476 6.35352 45.7501 6.35352H76.2501C103.853 6.35352 115.646 18.1468 115.646 45.7493V76.2493C115.646 77.4693 115.646 78.7402 115.544 79.9093C115.392 81.4343 114.324 82.756 112.85 83.2135C112.123 83.4348 111.346 83.4319 110.621 83.2052C109.895 82.9785 109.255 82.5386 108.783 81.9427C107.002 79.7547 104.754 77.9934 102.203 76.7883C99.6516 75.5831 96.863 74.9647 94.0417 74.9785C89.7209 74.9785 85.5017 76.4527 82.1467 79.1468C77.5717 82.756 74.9792 88.1443 74.9792 94.041C74.9792 99.7852 77.5209 105.174 81.9434 108.783C83.1634 109.749 83.6209 111.375 83.2142 112.849C82.7567 114.324 81.4859 115.391 79.9101 115.544C78.7409 115.645 77.4701 115.645 76.2501 115.645ZM45.7501 13.9785C22.3159 13.9785 13.9792 22.3152 13.9792 45.7493V76.2493C13.9792 99.6835 22.3159 108.02 45.7501 108.02H71.2684C68.7267 103.903 67.3542 99.0735 67.3542 94.041C67.3542 85.806 71.0142 78.2318 77.4192 73.1993C85.9592 66.286 98.9217 65.676 108.021 71.2677V45.7493C108.021 22.3152 99.6842 13.9785 76.2501 13.9785H45.7501Z" fill="#B8B8B8" fillOpacity="0.87" />
                                <path d="M109.19 39.9551H12.8101C10.7259 39.9551 8.99756 38.2267 8.99756 36.1426C8.99756 34.0584 10.7259 32.3301 12.8101 32.3301H109.19C110.201 32.3301 111.171 32.7318 111.886 33.4467C112.601 34.1617 113.003 35.1314 113.003 36.1426C113.003 37.1537 112.601 38.1234 111.886 38.8384C111.171 39.5534 110.201 39.9551 109.19 39.9551Z" fill="#B8B8B8" fillOpacity="0.87" />
                                <path d="M43.3101 39.2441C41.2259 39.2441 39.4976 37.5157 39.4976 35.4316V10.7266C39.4976 8.6424 41.2259 6.91406 43.3101 6.91406C45.3942 6.91406 47.1226 8.6424 47.1226 10.7266V35.4316C47.1226 37.5157 45.3942 39.2441 43.3101 39.2441ZM78.6901 36.9566C76.6059 36.9566 74.8776 35.2282 74.8776 33.1441V10.7266C74.8776 8.6424 76.6059 6.91406 78.6901 6.91406C80.7742 6.91406 82.5026 8.6424 82.5026 10.7266V33.1441C82.5026 35.2791 80.8251 36.9566 78.6901 36.9566ZM94.0417 120.73C87.8401 120.73 81.8417 118.595 77.1142 114.681C74.0485 112.189 71.5803 109.041 69.8913 105.47C68.2022 101.898 67.3353 97.9932 67.3542 94.0424C67.3542 85.8074 71.0142 78.2332 77.4192 73.2007C82.0959 69.4391 87.9926 67.3549 94.0417 67.3549C102.124 67.3549 109.648 70.9132 114.68 77.1657C118.543 81.8424 120.729 87.8407 120.729 94.0424C120.729 101.617 117.425 108.937 111.681 114.071C106.699 118.392 100.447 120.73 94.0417 120.73ZM94.0417 74.9799C89.7209 74.9799 85.5017 76.4541 82.1467 79.1482C77.5717 82.7574 74.9792 88.1457 74.9792 94.0424C74.9792 99.7866 77.5209 105.175 81.9434 108.784C88.8567 114.528 99.5826 114.477 106.648 108.327C108.661 106.527 110.274 104.327 111.386 101.867C112.498 99.4069 113.083 96.7418 113.104 94.0424C113.104 89.6199 111.579 85.3499 108.783 81.9949C107.009 79.7956 104.763 78.0233 102.211 76.8091C99.6595 75.5948 96.8676 74.9697 94.0417 74.9799Z" fill="#B8B8B8" fillOpacity="0.87" />
                                <path d="M88.3433 103.599C87.0725 103.599 85.8016 102.938 85.09 101.769C84.0225 99.9391 84.5816 97.6007 86.4116 96.5332L91.6983 93.3816V86.9766C91.6983 84.8924 93.4266 83.1641 95.5108 83.1641C97.595 83.1641 99.3233 84.8924 99.3233 86.9766V95.5674C99.3233 96.8891 98.6117 98.1599 97.4933 98.8207L90.3258 103.091C89.7094 103.401 89.0331 103.575 88.3433 103.599Z" fill="#B8B8B8" fillOpacity="0.87" />
                            </SVG>
                            <h4 style={{"textAlign":"center", "textDecoration":"none"}}>Fecha y Hora</h4>
                        </Option>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Main;