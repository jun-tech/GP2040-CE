export default {
	'sub-header-text': '여기에서 어떤 핀에 어떤 동작을 할당할지 설정할 수 있습니다. 버튼이 어느 핀에 연결되었는지 확인이 어려운 경우 핀 확인 기능을 사용해 보세요.',
	'alert-text':
		'연결되지 않았거나 사용할 수 없는 핀에 버튼을 매핑하면 장치가 작동불능에 빠질 수 있습니다. 잘못된 설정을 지우려면 <2>설정 초기화</2> 페이지로 이동해주세요.',
	'pin-viewer': '핀 확인',
	'pin-pressed': '눌린 핀: {{pressedPin}}',
	'profile-label-title': '프로필 이름',
	'profile-label-description':
		'최대 16자(영문)로 문자, 숫자, 공백을 사용할 수 있습니다.',
	'profile-pin-mapping-title': '프로필 {{profileLabel}} - GPIO 핀 매핑',
	'profile-label-default': '프로필 {{profileNumber}}',
	'profile-add-button': '+ 프로필 추가',
	'profile-disabled': ' - (사용안함)',
	'profile-enabled-tooltip':
		'사용하지 않는 프로필은 프로필 변경 핫키로 선택시 사용할 수 없게됩니다.',
	'profile-pins-warning':
		'프로필 변경 단축키에 사용되는 버튼 및/또는 방향키를 변경하지 마십시오. 프로필 선택을 확인하기 어려워 질 수 있습니다!',
	'profile-copy-base': '기본 프로필 복사',
	actions: {
		NONE: '없음',
		RESERVED: '예약됨',
		ASSIGNED_TO_ADDON: '애드온에 할당됨',
		BUTTON_PRESS_UP: '위',
		BUTTON_PRESS_DOWN: '아래',
		BUTTON_PRESS_LEFT: '왼쪽',
		BUTTON_PRESS_RIGHT: '오른쪽',
		BUTTON_PRESS_B1: 'B1',
		BUTTON_PRESS_B2: 'B2',
		BUTTON_PRESS_B3: 'B3',
		BUTTON_PRESS_B4: 'B4',
		BUTTON_PRESS_L1: 'L1',
		BUTTON_PRESS_R1: 'R1',
		BUTTON_PRESS_L2: 'L2',
		BUTTON_PRESS_R2: 'R2',
		BUTTON_PRESS_S1: 'S1',
		BUTTON_PRESS_S2: 'S2',
		BUTTON_PRESS_A1: 'A1',
		BUTTON_PRESS_A2: 'A2',
		BUTTON_PRESS_L3: 'L3',
		BUTTON_PRESS_R3: 'R3',
		BUTTON_PRESS_A3: 'A3',
		BUTTON_PRESS_A4: 'A4',
		BUTTON_PRESS_FN: '펑션(FN)',
		BUTTON_PRESS_DDI_UP: 'DDI 상',
		BUTTON_PRESS_DDI_DOWN: 'DDI 하',
		BUTTON_PRESS_DDI_LEFT: 'DDI 좌',
		BUTTON_PRESS_DDI_RIGHT: 'DDI 우',
		SUSTAIN_DP_MODE_DP: 'D-패드 모드: D-패드',
		SUSTAIN_DP_MODE_LS: 'D-패드 모드: 좌아날로그',
		SUSTAIN_DP_MODE_RS: 'D-패드 모드: 우아날로그',
		SUSTAIN_SOCD_MODE_UP_PRIO: '상단 우선 SOCD',
		SUSTAIN_SOCD_MODE_NEUTRAL: '중립 SOCD',
		SUSTAIN_SOCD_MODE_SECOND_WIN: '후 입력 우선 SOCD',
		SUSTAIN_SOCD_MODE_FIRST_WIN: '선 입력 우선 SOCD',
		SUSTAIN_SOCD_MODE_BYPASS: 'SOCD 비활성',
		BUTTON_PRESS_TURBO: '터보',
		BUTTON_PRESS_MACRO: '매크로 버튼',
		BUTTON_PRESS_MACRO_1: '매크로 1',
		BUTTON_PRESS_MACRO_2: '매크로 2',
		BUTTON_PRESS_MACRO_3: '매크로 3',
		BUTTON_PRESS_MACRO_4: '매크로 4',
		BUTTON_PRESS_MACRO_5: '매크로 5',
		BUTTON_PRESS_MACRO_6: '매크로 6',
		CUSTOM_BUTTON_COMBO: '멀티 매핑에 할당됨',
		BUTTON_PRESS_E1: '추가 1',
		BUTTON_PRESS_E2: '추가 2',
		BUTTON_PRESS_E3: '추가 3',
		BUTTON_PRESS_E4: '추가 4',
		BUTTON_PRESS_E5: '추가 5',
		BUTTON_PRESS_E6: '추가 6',
		BUTTON_PRESS_E7: '추가 7',
		BUTTON_PRESS_E8: '추가 8',
		BUTTON_PRESS_E9: '추가 9',
		BUTTON_PRESS_E10: '추가 10',
		BUTTON_PRESS_E11: '추가 11',
		BUTTON_PRESS_E12: '추가 12',
		DIGITAL_DIRECTION_UP: 'D-패드 위',
		DIGITAL_DIRECTION_DOWN: 'D-패드 아래',
		DIGITAL_DIRECTION_LEFT: 'D-패드 왼쪽',
		DIGITAL_DIRECTION_RIGHT: 'D-패드 오른쪽',
		ANALOG_DIRECTION_LS_X_NEG: '좌 아날로그 스틱 X-',
		ANALOG_DIRECTION_LS_X_POS: '좌 아날로그 스틱 X+',
		ANALOG_DIRECTION_LS_Y_NEG: '좌 아날로그 스틱 Y-',
		ANALOG_DIRECTION_LS_Y_POS: '좌 아날로그 스틱 Y+',
		ANALOG_DIRECTION_RS_X_NEG: '우 아날로그 스틱 X-',
		ANALOG_DIRECTION_RS_X_POS: '우 아날로그 스틱 X+',
		ANALOG_DIRECTION_RS_Y_NEG: '우 아날로그 스틱 Y-',
		ANALOG_DIRECTION_RS_Y_POS: '우 아날로그 스틱 Y+',
		ANALOG_DIRECTION_MOD_LOW: '아날로그 스틱 기울기 1',
		ANALOG_DIRECTION_MOD_HIGH: '아날로그 스틱 기울기 2',
		BUTTON_PRESS_INPUT_REVERSE: '입력 반전',
		SUSTAIN_FOCUS_MODE: '포커스 모드 사용',
		SUSTAIN_4_8_WAY_MODE: '4-방향 모드 전환',
		MENU_NAVIGATION_UP: '메뉴 위',
		MENU_NAVIGATION_DOWN: '메뉴 아래',
		MENU_NAVIGATION_LEFT: '메뉴 왼쪽',
		MENU_NAVIGATION_RIGHT: '메뉴 오른쪽',
		MENU_NAVIGATION_SELECT: '메뉴 선택',
		MENU_NAVIGATION_BACK: '메뉴 이전',
		MENU_NAVIGATION_TOGGLE: '메뉴 토글',
	},
};
