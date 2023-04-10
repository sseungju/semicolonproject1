/**
 * 
 */

const locations = [
            { place:"식당(학생식당) / 위치 : 학생복지회관 1층, 2층", lat: 36.910100944034234, lng: 127.14355509795361 },
            { place:"식당(채움) / 위치 : 엘림생활2관 1층", lat: 36.908951409720856, lng: 127.14705269822494 },

			{ place:"카페(bread&co) / 위치 : 학생복지회관 지하1층", lat: 36.90985216558675, lng: 127.1434156231902 },
            { place:"카페(블루포트) / 위치 : 학생복지회관 지하1층", lat: 36.909792115519764, lng: 127.1437482170814 },

			{ place:"농협은행", content: "농협은행 ", lat: 36.9109837742016, lng: 127.14339308778167 },
            { place:"국민atm", content: "국민atm", lat: 36.90971224451516, lng: 127.14658894028321 },
			{ place:"국민atm", content: "국민atm", lat: 36.910715933334686, lng: 127.14441098674004 },
			{ place:"국민atm", content: "국민atm", lat: 36.907192801088485, lng: 127.14272260419334 },
			{ place:"농협atm", content: "농협atm", lat: 36.90728716867352, lng: 127.14332341896389 },
        ];

        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(36.90931797422023, 127.14442718445918),
            zoom: 17
        });
        
        

        for (var i = 0; i < locations.length; i++) {
                var marker = new naver.maps.Marker({
                    map: map,
                    title: locations[i].place,
                    position: new naver.maps.LatLng(locations[i].lat, locations[i].lng),
                });
            }
 
        naver.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
        naver.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
    

     // 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
    function makeOverListener(map, marker, infowindow) {
        return function() {
            infowindow.open(map, marker);
        };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다 
    function makeOutListener(infowindow) {
        return function() {
            infowindow.close();
        }; 
    }



