/** @namespace
 * Keys and buttons
 *
 * Most of the keys/buttons are modeled after USB HUT 1.12
 * (see http://www.usb.org/developers/hidpage).
 * Abbreviations in the comments:
 * AC - Application Control
 * AL - Application Launch Button
 * SC - System Control
 */

export const KEY_RESERVED = 0;
export const KEY_ESC = 1;
export const KEY_1 = 2;
export const KEY_2 = 3;
export const KEY_3 = 4;
export const KEY_4 = 5;
export const KEY_5 = 6;
export const KEY_6 = 7;
export const KEY_7 = 8;
export const KEY_8 = 9;
export const KEY_9 = 10;
export const KEY_0 = 11;
export const KEY_MINUS = 12;
export const KEY_EQUAL = 13;
export const KEY_BACKSPACE = 14;
export const KEY_TAB = 15;
export const KEY_Q = 16;
export const KEY_W = 17;
export const KEY_E = 18;
export const KEY_R = 19;
export const KEY_T = 20;
export const KEY_Y = 21;
export const KEY_U = 22;
export const KEY_I = 23;
export const KEY_O = 24;
export const KEY_P = 25;
export const KEY_LEFTBRACE = 26;
export const KEY_RIGHTBRACE = 27;
export const KEY_ENTER = 28;
export const KEY_LEFTCTRL = 29;
export const KEY_A = 30;
export const KEY_S = 31;
export const KEY_D = 32;
export const KEY_F = 33;
export const KEY_G = 34;
export const KEY_H = 35;
export const KEY_J = 36;
export const KEY_K = 37;
export const KEY_L = 38;
export const KEY_SEMICOLON = 39;
export const KEY_APOSTROPHE = 40;
export const KEY_GRAVE = 41;
export const KEY_LEFTSHIFT = 42;
export const KEY_BACKSLASH = 43;
export const KEY_Z = 44;
export const KEY_X = 45;
export const KEY_C = 46;
export const KEY_V = 47;
export const KEY_B = 48;
export const KEY_N = 49;
export const KEY_M = 50;
export const KEY_COMMA = 51;
export const KEY_DOT = 52;
export const KEY_SLASH = 53;
export const KEY_RIGHTSHIFT = 54;
export const KEY_KPASTERISK = 55;
export const KEY_LEFTALT = 56;
export const KEY_SPACE = 57;
export const KEY_CAPSLOCK = 58;
export const KEY_F1 = 59;
export const KEY_F2 = 60;
export const KEY_F3 = 61;
export const KEY_F4 = 62;
export const KEY_F5 = 63;
export const KEY_F6 = 64;
export const KEY_F7 = 65;
export const KEY_F8 = 66;
export const KEY_F9 = 67;
export const KEY_F10 = 68;
export const KEY_NUMLOCK = 69;
export const KEY_SCROLLLOCK = 70;
export const KEY_KP7 = 71;
export const KEY_KP8 = 72;
export const KEY_KP9 = 73;
export const KEY_KPMINUS = 74;
export const KEY_KP4 = 75;
export const KEY_KP5 = 76;
export const KEY_KP6 = 77;
export const KEY_KPPLUS = 78;
export const KEY_KP1 = 79;
export const KEY_KP2 = 80;
export const KEY_KP3 = 81;
export const KEY_KP0 = 82;
export const KEY_KPDOT = 83;

export const KEY_ZENKAKUHANKAKU = 85;
export const KEY_102ND = 86;
export const KEY_F11 = 87;
export const KEY_F12 = 88;
export const KEY_RO = 89;
export const KEY_KATAKANA = 90;
export const KEY_HIRAGANA = 91;
export const KEY_HENKAN = 92;
export const KEY_KATAKANAHIRAGANA = 93;
export const KEY_MUHENKAN = 94;
export const KEY_KPJPCOMMA = 95;
export const KEY_KPENTER = 96;
export const KEY_RIGHTCTRL = 97;
export const KEY_KPSLASH = 98;
export const KEY_SYSRQ = 99;
export const KEY_RIGHTALT = 100;
export const KEY_LINEFEED = 101;
export const KEY_HOME = 102;
export const KEY_UP = 103;
export const KEY_PAGEUP = 104;
export const KEY_LEFT = 105;
export const KEY_RIGHT = 106;
export const KEY_END = 107;
export const KEY_DOWN = 108;
export const KEY_PAGEDOWN = 109;
export const KEY_INSERT = 110;
export const KEY_DELETE = 111;
export const KEY_MACRO = 112;
export const KEY_MUTE = 113;
export const KEY_VOLUMEDOWN = 114;
export const KEY_VOLUMEUP = 115;
export const KEY_POWER = 116	/* SC System Power Down */;
export const KEY_KPEQUAL = 117;
export const KEY_KPPLUSMINUS = 118;
export const KEY_PAUSE = 119;
export const KEY_SCALE = 120	/* AL Compiz Scale (Expose) */;

export const KEY_KPCOMMA = 121;
export const KEY_HANGEUL = 122;
export const KEY_HANGUEL = KEY_HANGEUL;
export const KEY_HANJA = 123;
export const KEY_YEN = 124;
export const KEY_LEFTMETA = 125;
export const KEY_RIGHTMETA = 126;
export const KEY_COMPOSE = 127;

export const KEY_STOP = 128	/* AC Stop */;
export const KEY_AGAIN = 129;
export const KEY_PROPS = 130	/* AC Properties */;
export const KEY_UNDO = 131	/* AC Undo */;
export const KEY_FRONT = 132;
export const KEY_COPY = 133	/* AC Copy */;
export const KEY_OPEN = 134	/* AC Open */;
export const KEY_PASTE = 135	/* AC Paste */;
export const KEY_FIND = 136	/* AC Search */;
export const KEY_CUT = 137	/* AC Cut */;
export const KEY_HELP = 138	/* AL Integrated Help Center */;
export const KEY_MENU = 139	/* Menu (show menu) */;
export const KEY_CALC = 140	/* AL Calculator */;
export const KEY_SETUP = 141;
export const KEY_SLEEP = 142	/* SC System Sleep */;
export const KEY_WAKEUP = 143	/* System Wake Up */;
export const KEY_FILE = 144	/* AL Local Machine Browser */;
export const KEY_SENDFILE = 145;
export const KEY_DELETEFILE = 146;
export const KEY_XFER = 147;
export const KEY_PROG1 = 148;
export const KEY_PROG2 = 149;
export const KEY_WWW = 150	/* AL Internet Browser */;
export const KEY_MSDOS = 151;
export const KEY_COFFEE = 152	/* AL Terminal Lock/Screensaver */;
export const KEY_SCREENLOCK = KEY_COFFEE;
export const KEY_ROTATE_DISPLAY = 153	/* Display orientation for e.g. tablets */;
export const KEY_DIRECTION = KEY_ROTATE_DISPLAY;
export const KEY_CYCLEWINDOWS = 154;
export const KEY_MAIL = 155;
export const KEY_BOOKMARKS = 156	/* AC Bookmarks */;
export const KEY_COMPUTER = 157;
export const KEY_BACK = 158	/* AC Back */;
export const KEY_FORWARD = 159	/* AC Forward */;
export const KEY_CLOSECD = 160;
export const KEY_EJECTCD = 161;
export const KEY_EJECTCLOSECD = 162;
export const KEY_NEXTSONG = 163;
export const KEY_PLAYPAUSE = 164;
export const KEY_PREVIOUSSONG = 165;
export const KEY_STOPCD = 166;
export const KEY_RECORD = 167;
export const KEY_REWIND = 168;
export const KEY_PHONE = 169	/* Media Select Telephone */;
export const KEY_ISO = 170;
export const KEY_CONFIG = 171	/* AL Consumer Control Configuration */;
export const KEY_HOMEPAGE = 172	/* AC Home */;
export const KEY_REFRESH = 173	/* AC Refresh */;
export const KEY_EXIT = 174	/* AC Exit */;
export const KEY_MOVE = 175;
export const KEY_EDIT = 176;
export const KEY_SCROLLUP = 177;
export const KEY_SCROLLDOWN = 178;
export const KEY_KPLEFTPAREN = 179;
export const KEY_KPRIGHTPAREN = 180;
export const KEY_NEW = 181	/* AC New */;
export const KEY_REDO = 182	/* AC Redo/Repeat */;

export const KEY_F13 = 183;
export const KEY_F14 = 184;
export const KEY_F15 = 185;
export const KEY_F16 = 186;
export const KEY_F17 = 187;
export const KEY_F18 = 188;
export const KEY_F19 = 189;
export const KEY_F20 = 190;
export const KEY_F21 = 191;
export const KEY_F22 = 192;
export const KEY_F23 = 193;
export const KEY_F24 = 194;

export const KEY_PLAYCD = 200;
export const KEY_PAUSECD = 201;
export const KEY_PROG3 = 202;
export const KEY_PROG4 = 203;
export const KEY_ALL_APPLICATIONS = 204	/* AC Desktop Show All Applications */;
export const KEY_DASHBOARD = KEY_ALL_APPLICATIONS;
export const KEY_SUSPEND = 205;
export const KEY_CLOSE = 206	/* AC Close */;
export const KEY_PLAY = 207;
export const KEY_FASTFORWARD = 208;
export const KEY_BASSBOOST = 209;
export const KEY_PRINT = 210	/* AC Print */;
export const KEY_HP = 211;
export const KEY_CAMERA = 212;
export const KEY_SOUND = 213;
export const KEY_QUESTION = 214;
export const KEY_EMAIL = 215;
export const KEY_CHAT = 216;
export const KEY_SEARCH = 217;
export const KEY_CONNECT = 218;
export const KEY_FINANCE = 219	/* AL Checkbook/Finance */;
export const KEY_SPORT = 220;
export const KEY_SHOP = 221;
export const KEY_ALTERASE = 222;
export const KEY_CANCEL = 223	/* AC Cancel */;
export const KEY_BRIGHTNESSDOWN = 224;
export const KEY_BRIGHTNESSUP = 225;
export const KEY_MEDIA = 226;

export const KEY_SWITCHVIDEOMODE = 227;	/* Cycle between available video;
					   outputs (Monitor/LCD/TV-out/etc) */
export const KEY_KBDILLUMTOGGLE = 228;
export const KEY_KBDILLUMDOWN = 229;
export const KEY_KBDILLUMUP = 230;

export const KEY_SEND = 231	/* AC Send */;
export const KEY_REPLY = 232	/* AC Reply */;
export const KEY_FORWARDMAIL = 233	/* AC Forward Msg */;
export const KEY_SAVE = 234	/* AC Save */;
export const KEY_DOCUMENTS = 235;

export const KEY_BATTERY = 236;

export const KEY_BLUETOOTH = 237;
export const KEY_WLAN = 238;
export const KEY_UWB = 239;

export const KEY_UNKNOWN = 240;

export const KEY_VIDEO_NEXT = 241	/* drive next video source */;
export const KEY_VIDEO_PREV = 242	/* drive previous video source */;
export const KEY_BRIGHTNESS_CYCLE = 243	/* brightness up, after max is min */;
export const KEY_BRIGHTNESS_AUTO = 244;	/* Set Auto Brightness: manual;
					  brightness control is off,
					  rely on ambient */
export const KEY_BRIGHTNESS_ZERO = KEY_BRIGHTNESS_AUTO;
export const KEY_DISPLAY_OFF = 245	/* display device to off state */;

export const KEY_WWAN = 246	/* Wireless WAN (LTE, UMTS, GSM, etc.) */;
export const KEY_WIMAX = KEY_WWAN;
export const KEY_RFKILL = 247	/* Key that controls all radios */;

export const KEY_MICMUTE = 248	/* Mute / unmute the microphone */;

/* Code 255 is reserved for special needs of AT keyboard driver */

export const BTN_MISC = 0x100;
export const BTN_0 = 0x100;
export const BTN_1 = 0x101;
export const BTN_2 = 0x102;
export const BTN_3 = 0x103;
export const BTN_4 = 0x104;
export const BTN_5 = 0x105;
export const BTN_6 = 0x106;
export const BTN_7 = 0x107;
export const BTN_8 = 0x108;
export const BTN_9 = 0x109;

export const BTN_MOUSE = 0x110;
export const BTN_LEFT = 0x110;
export const BTN_RIGHT = 0x111;
export const BTN_MIDDLE = 0x112;
export const BTN_SIDE = 0x113;
export const BTN_EXTRA = 0x114;
export const BTN_FORWARD = 0x115;
export const BTN_BACK = 0x116;
export const BTN_TASK = 0x117;

export const BTN_JOYSTICK = 0x120;
export const BTN_TRIGGER = 0x120;
export const BTN_THUMB = 0x121;
export const BTN_THUMB2 = 0x122;
export const BTN_TOP = 0x123;
export const BTN_TOP2 = 0x124;
export const BTN_PINKIE = 0x125;
export const BTN_BASE = 0x126;
export const BTN_BASE2 = 0x127;
export const BTN_BASE3 = 0x128;
export const BTN_BASE4 = 0x129;
export const BTN_BASE5 = 0x12a;
export const BTN_BASE6 = 0x12b;
export const BTN_DEAD = 0x12f;

export const BTN_GAMEPAD = 0x130;
export const BTN_SOUTH = 0x130;
export const BTN_A = BTN_SOUTH;
export const BTN_EAST = 0x131;
export const BTN_B = BTN_EAST;
export const BTN_C = 0x132;
export const BTN_NORTH = 0x133;
export const BTN_X = BTN_NORTH;
export const BTN_WEST = 0x134;
export const BTN_Y = BTN_WEST;
export const BTN_Z = 0x135;
export const BTN_TL = 0x136;
export const BTN_TR = 0x137;
export const BTN_TL2 = 0x138;
export const BTN_TR2 = 0x139;
export const BTN_SELECT = 0x13a;
export const BTN_START = 0x13b;
export const BTN_MODE = 0x13c;
export const BTN_THUMBL = 0x13d;
export const BTN_THUMBR = 0x13e;

export const BTN_DIGI = 0x140;
export const BTN_TOOL_PEN = 0x140;
export const BTN_TOOL_RUBBER = 0x141;
export const BTN_TOOL_BRUSH = 0x142;
export const BTN_TOOL_PENCIL = 0x143;
export const BTN_TOOL_AIRBRUSH = 0x144;
export const BTN_TOOL_FINGER = 0x145;
export const BTN_TOOL_MOUSE = 0x146;
export const BTN_TOOL_LENS = 0x147;
export const BTN_TOOL_QUINTTAP = 0x148	/* Five fingers on trackpad */;
export const BTN_STYLUS3 = 0x149;
export const BTN_TOUCH = 0x14a;
export const BTN_STYLUS = 0x14b;
export const BTN_STYLUS2 = 0x14c;
export const BTN_TOOL_DOUBLETAP = 0x14d;
export const BTN_TOOL_TRIPLETAP = 0x14e;
export const BTN_TOOL_QUADTAP = 0x14f	/* Four fingers on trackpad */;

export const BTN_WHEEL = 0x150;
export const BTN_GEAR_DOWN = 0x150;
export const BTN_GEAR_UP = 0x151;

export const KEY_OK = 0x160;
export const KEY_SELECT = 0x161;
export const KEY_GOTO = 0x162;
export const KEY_CLEAR = 0x163;
export const KEY_POWER2 = 0x164;
export const KEY_OPTION = 0x165;
export const KEY_INFO = 0x166	/* AL OEM Features/Tips/Tutorial */;
export const KEY_TIME = 0x167;
export const KEY_VENDOR = 0x168;
export const KEY_ARCHIVE = 0x169;
export const KEY_PROGRAM = 0x16a	/* Media Select Program Guide */;
export const KEY_CHANNEL = 0x16b;
export const KEY_FAVORITES = 0x16c;
export const KEY_EPG = 0x16d;
export const KEY_PVR = 0x16e	/* Media Select Home */;
export const KEY_MHP = 0x16f;
export const KEY_LANGUAGE = 0x170;
export const KEY_TITLE = 0x171;
export const KEY_SUBTITLE = 0x172;
export const KEY_ANGLE = 0x173;
export const KEY_FULL_SCREEN = 0x174	/* AC View Toggle */;
export const KEY_ZOOM = KEY_FULL_SCREEN;
export const KEY_MODE = 0x175;
export const KEY_KEYBOARD = 0x176;
export const KEY_ASPECT_RATIO = 0x177	/* HUTRR37: Aspect */;
export const KEY_SCREEN = KEY_ASPECT_RATIO;
export const KEY_PC = 0x178	/* Media Select Computer */;
export const KEY_TV = 0x179	/* Media Select TV */;
export const KEY_TV2 = 0x17a	/* Media Select Cable */;
export const KEY_VCR = 0x17b	/* Media Select VCR */;
export const KEY_VCR2 = 0x17c	/* VCR Plus */;
export const KEY_SAT = 0x17d	/* Media Select Satellite */;
export const KEY_SAT2 = 0x17e;
export const KEY_CD = 0x17f	/* Media Select CD */;
export const KEY_TAPE = 0x180	/* Media Select Tape */;
export const KEY_RADIO = 0x181;
export const KEY_TUNER = 0x182	/* Media Select Tuner */;
export const KEY_PLAYER = 0x183;
export const KEY_TEXT = 0x184;
export const KEY_DVD = 0x185	/* Media Select DVD */;
export const KEY_AUX = 0x186;
export const KEY_MP3 = 0x187;
export const KEY_AUDIO = 0x188	/* AL Audio Browser */;
export const KEY_VIDEO = 0x189	/* AL Movie Browser */;
export const KEY_DIRECTORY = 0x18a;
export const KEY_LIST = 0x18b;
export const KEY_MEMO = 0x18c	/* Media Select Messages */;
export const KEY_CALENDAR = 0x18d;
export const KEY_RED = 0x18e;
export const KEY_GREEN = 0x18f;
export const KEY_YELLOW = 0x190;
export const KEY_BLUE = 0x191;
export const KEY_CHANNELUP = 0x192	/* Channel Increment */;
export const KEY_CHANNELDOWN = 0x193	/* Channel Decrement */;
export const KEY_FIRST = 0x194;
export const KEY_LAST = 0x195	/* Recall Last */;
export const KEY_AB = 0x196;
export const KEY_NEXT = 0x197;
export const KEY_RESTART = 0x198;
export const KEY_SLOW = 0x199;
export const KEY_SHUFFLE = 0x19a;
export const KEY_BREAK = 0x19b;
export const KEY_PREVIOUS = 0x19c;
export const KEY_DIGITS = 0x19d;
export const KEY_TEEN = 0x19e;
export const KEY_TWEN = 0x19f;
export const KEY_VIDEOPHONE = 0x1a0	/* Media Select Video Phone */;
export const KEY_GAMES = 0x1a1	/* Media Select Games */;
export const KEY_ZOOMIN = 0x1a2	/* AC Zoom In */;
export const KEY_ZOOMOUT = 0x1a3	/* AC Zoom Out */;
export const KEY_ZOOMRESET = 0x1a4	/* AC Zoom */;
export const KEY_WORDPROCESSOR = 0x1a5	/* AL Word Processor */;
export const KEY_EDITOR = 0x1a6	/* AL Text Editor */;
export const KEY_SPREADSHEET = 0x1a7	/* AL Spreadsheet */;
export const KEY_GRAPHICSEDITOR = 0x1a8	/* AL Graphics Editor */;
export const KEY_PRESENTATION = 0x1a9	/* AL Presentation App */;
export const KEY_DATABASE = 0x1aa	/* AL Database App */;
export const KEY_NEWS = 0x1ab	/* AL Newsreader */;
export const KEY_VOICEMAIL = 0x1ac	/* AL Voicemail */;
export const KEY_ADDRESSBOOK = 0x1ad	/* AL Contacts/Address Book */;
export const KEY_MESSENGER = 0x1ae	/* AL Instant Messaging */;
export const KEY_DISPLAYTOGGLE = 0x1af	/* Turn display (LCD) on and off */;
export const KEY_BRIGHTNESS_TOGGLE = KEY_DISPLAYTOGGLE;
export const KEY_SPELLCHECK = 0x1b0   /* AL Spell Check */;
export const KEY_LOGOFF = 0x1b1   /* AL Logoff */;

export const KEY_DOLLAR = 0x1b2;
export const KEY_EURO = 0x1b3;

export const KEY_FRAMEBACK = 0x1b4	/* Consumer - transport controls */;
export const KEY_FRAMEFORWARD = 0x1b5;
export const KEY_CONTEXT_MENU = 0x1b6	/* GenDesc - system context menu */;
export const KEY_MEDIA_REPEAT = 0x1b7	/* Consumer - transport control */;
export const KEY_10CHANNELSUP = 0x1b8	/* 10 channels up (10+) */;
export const KEY_10CHANNELSDOWN = 0x1b9	/* 10 channels down (10-) */;
export const KEY_IMAGES = 0x1ba	/* AL Image Browser */;
export const KEY_NOTIFICATION_CENTER = 0x1bc	/* Show/hide the notification center */;
export const KEY_PICKUP_PHONE = 0x1bd	/* Answer incoming call */;
export const KEY_HANGUP_PHONE = 0x1be	/* Decline incoming call */;
export const KEY_LINK_PHONE = 0x1bf   /* AL Phone Syncing */;

export const KEY_DEL_EOL = 0x1c0;
export const KEY_DEL_EOS = 0x1c1;
export const KEY_INS_LINE = 0x1c2;
export const KEY_DEL_LINE = 0x1c3;

export const KEY_FN = 0x1d0;
export const KEY_FN_ESC = 0x1d1;
export const KEY_FN_F1 = 0x1d2;
export const KEY_FN_F2 = 0x1d3;
export const KEY_FN_F3 = 0x1d4;
export const KEY_FN_F4 = 0x1d5;
export const KEY_FN_F5 = 0x1d6;
export const KEY_FN_F6 = 0x1d7;
export const KEY_FN_F7 = 0x1d8;
export const KEY_FN_F8 = 0x1d9;
export const KEY_FN_F9 = 0x1da;
export const KEY_FN_F10 = 0x1db;
export const KEY_FN_F11 = 0x1dc;
export const KEY_FN_F12 = 0x1dd;
export const KEY_FN_1 = 0x1de;
export const KEY_FN_2 = 0x1df;
export const KEY_FN_D = 0x1e0;
export const KEY_FN_E = 0x1e1;
export const KEY_FN_F = 0x1e2;
export const KEY_FN_S = 0x1e3;
export const KEY_FN_B = 0x1e4;
export const KEY_FN_RIGHT_SHIFT = 0x1e5;

export const KEY_BRL_DOT1 = 0x1f1;
export const KEY_BRL_DOT2 = 0x1f2;
export const KEY_BRL_DOT3 = 0x1f3;
export const KEY_BRL_DOT4 = 0x1f4;
export const KEY_BRL_DOT5 = 0x1f5;
export const KEY_BRL_DOT6 = 0x1f6;
export const KEY_BRL_DOT7 = 0x1f7;
export const KEY_BRL_DOT8 = 0x1f8;
export const KEY_BRL_DOT9 = 0x1f9;
export const KEY_BRL_DOT10 = 0x1fa;

export const KEY_NUMERIC_0 = 0x200	/* used by phones, remote controls, */;
export const KEY_NUMERIC_1 = 0x201	/* and other keypads */;
export const KEY_NUMERIC_2 = 0x202;
export const KEY_NUMERIC_3 = 0x203;
export const KEY_NUMERIC_4 = 0x204;
export const KEY_NUMERIC_5 = 0x205;
export const KEY_NUMERIC_6 = 0x206;
export const KEY_NUMERIC_7 = 0x207;
export const KEY_NUMERIC_8 = 0x208;
export const KEY_NUMERIC_9 = 0x209;
export const KEY_NUMERIC_STAR = 0x20a;
export const KEY_NUMERIC_POUND = 0x20b;
export const KEY_NUMERIC_A = 0x20c	/* Phone key A - HUT Telephony 0xb9 */;
export const KEY_NUMERIC_B = 0x20d;
export const KEY_NUMERIC_C = 0x20e;
export const KEY_NUMERIC_D = 0x20f;

export const KEY_CAMERA_FOCUS = 0x210;
export const KEY_WPS_BUTTON = 0x211	/* WiFi Protected Setup key */;

export const KEY_TOUCHPAD_TOGGLE = 0x212	/* Request switch touchpad on or off */;
export const KEY_TOUCHPAD_ON = 0x213;
export const KEY_TOUCHPAD_OFF = 0x214;

export const KEY_CAMERA_ZOOMIN = 0x215;
export const KEY_CAMERA_ZOOMOUT = 0x216;
export const KEY_CAMERA_UP = 0x217;
export const KEY_CAMERA_DOWN = 0x218;
export const KEY_CAMERA_LEFT = 0x219;
export const KEY_CAMERA_RIGHT = 0x21a;

export const KEY_ATTENDANT_ON = 0x21b;
export const KEY_ATTENDANT_OFF = 0x21c;
export const KEY_ATTENDANT_TOGGLE = 0x21d	/* Attendant call on or off */;
export const KEY_LIGHTS_TOGGLE = 0x21e	/* Reading light on or off */;

export const BTN_DPAD_UP = 0x220;
export const BTN_DPAD_DOWN = 0x221;
export const BTN_DPAD_LEFT = 0x222;
export const BTN_DPAD_RIGHT = 0x223;

export const KEY_ALS_TOGGLE = 0x230	/* Ambient light sensor */;
export const KEY_ROTATE_LOCK_TOGGLE = 0x231	/* Display rotation lock */;
export const KEY_REFRESH_RATE_TOGGLE = 0x232	/* Display refresh rate toggle */;

export const KEY_BUTTONCONFIG = 0x240	/* AL Button Configuration */;
export const KEY_TASKMANAGER = 0x241	/* AL Task/Project Manager */;
export const KEY_JOURNAL = 0x242	/* AL Log/Journal/Timecard */;
export const KEY_CONTROLPANEL = 0x243	/* AL Control Panel */;
export const KEY_APPSELECT = 0x244	/* AL Select Task/Application */;
export const KEY_SCREENSAVER = 0x245	/* AL Screen Saver */;
export const KEY_VOICECOMMAND = 0x246	/* Listening Voice Command */;
export const KEY_ASSISTANT = 0x247	/* AL Context-aware desktop assistant */;
export const KEY_KBD_LAYOUT_NEXT = 0x248	/* AC Next Keyboard Layout Select */;
export const KEY_EMOJI_PICKER = 0x249	/* Show/hide emoji picker (HUTRR101) */;
export const KEY_DICTATE = 0x24a	/* Start or Stop Voice Dictation Session (HUTRR99) */;
export const KEY_CAMERA_ACCESS_ENABLE = 0x24b	/* Enables programmatic access to camera devices. (HUTRR72) */;
export const KEY_CAMERA_ACCESS_DISABLE = 0x24c	/* Disables programmatic access to camera devices. (HUTRR72) */;
export const KEY_CAMERA_ACCESS_TOGGLE = 0x24d	/* Toggles the current state of the camera access control. (HUTRR72) */;
export const KEY_ACCESSIBILITY = 0x24e	/* Toggles the system bound accessibility UI/command (HUTRR116) */;
export const KEY_DO_NOT_DISTURB = 0x24f	/* Toggles the system-wide "Do Not Disturb" control (HUTRR94)*/;

export const KEY_BRIGHTNESS_MIN = 0x250	/* Set Brightness to Minimum */;
export const KEY_BRIGHTNESS_MAX = 0x251	/* Set Brightness to Maximum */;

export const KEY_KBDINPUTASSIST_PREV = 0x260;
export const KEY_KBDINPUTASSIST_NEXT = 0x261;
export const KEY_KBDINPUTASSIST_PREVGROUP = 0x262;
export const KEY_KBDINPUTASSIST_NEXTGROUP = 0x263;
export const KEY_KBDINPUTASSIST_ACCEPT = 0x264;
export const KEY_KBDINPUTASSIST_CANCEL = 0x265;

/* Diagonal movement keys */
export const KEY_RIGHT_UP = 0x266;
export const KEY_RIGHT_DOWN = 0x267;
export const KEY_LEFT_UP = 0x268;
export const KEY_LEFT_DOWN = 0x269;

export const KEY_ROOT_MENU = 0x26a /* Show Device's Root Menu */;
/* Show Top Menu of the Media (e.g. DVD) */
export const KEY_MEDIA_TOP_MENU = 0x26b;
export const KEY_NUMERIC_11 = 0x26c;
export const KEY_NUMERIC_12 = 0x26d;
/*
 * Toggle Audio Description: refers to an audio service that helps blind and
 * visually impaired consumers understand the action in a program. Note: in
 * some countries this is referred to as "Video Description".
 */
export const KEY_AUDIO_DESC = 0x26e;
export const KEY_3D_MODE = 0x26f;
export const KEY_NEXT_FAVORITE = 0x270;
export const KEY_STOP_RECORD = 0x271;
export const KEY_PAUSE_RECORD = 0x272;
export const KEY_VOD = 0x273 /* Video on Demand */;
export const KEY_UNMUTE = 0x274;
export const KEY_FASTREVERSE = 0x275;
export const KEY_SLOWREVERSE = 0x276;
/*
 * Control a data application associated with the currently viewed channel,
 * e.g. teletext or data broadcast application (MHEG, MHP, HbbTV, etc.)
 */
export const KEY_DATA = 0x277;
export const KEY_ONSCREEN_KEYBOARD = 0x278;
/* Electronic privacy screen control */
export const KEY_PRIVACY_SCREEN_TOGGLE = 0x279;

/* Select an area of screen to be copied */
export const KEY_SELECTIVE_SCREENSHOT = 0x27a;

/* Move the focus to the next or previous user controllable element within a UI container */
export const KEY_NEXT_ELEMENT = 0x27b;
export const KEY_PREVIOUS_ELEMENT = 0x27c;

/* Toggle Autopilot engagement */
export const KEY_AUTOPILOT_ENGAGE_TOGGLE = 0x27d;

/* Shortcut Keys */
export const KEY_MARK_WAYPOINT = 0x27e;
export const KEY_SOS = 0x27f;
export const KEY_NAV_CHART = 0x280;
export const KEY_FISHING_CHART = 0x281;
export const KEY_SINGLE_RANGE_RADAR = 0x282;
export const KEY_DUAL_RANGE_RADAR = 0x283;
export const KEY_RADAR_OVERLAY = 0x284;
export const KEY_TRADITIONAL_SONAR = 0x285;
export const KEY_CLEARVU_SONAR = 0x286;
export const KEY_SIDEVU_SONAR = 0x287;
export const KEY_NAV_INFO = 0x288;
export const KEY_BRIGHTNESS_MENU = 0x289;

/*
 * Some keyboards have keys which do not have a defined meaning, these keys
 * are intended to be programmed / bound to macros by the user. For most
 * keyboards with these macro-keys the key-sequence to inject, or action to
 * take, is all handled by software on the host side. So from the kernel's
 * point of view these are just normal keys.
 *
 * The KEY_MACRO# codes below are intended for such keys, which may be labeled
 * e.g. G1-G18, or S1 - S30. The KEY_MACRO# codes MUST NOT be used for keys
 * where the marking on the key does indicate a defined meaning / purpose.
 *
 * The KEY_MACRO# codes MUST also NOT be used as fallback for when no existing
 * KEY_FOO define matches the marking / purpose. In this case a new KEY_FOO
 * define MUST be added.
 */
export const KEY_MACRO1 = 0x290;
export const KEY_MACRO2 = 0x291;
export const KEY_MACRO3 = 0x292;
export const KEY_MACRO4 = 0x293;
export const KEY_MACRO5 = 0x294;
export const KEY_MACRO6 = 0x295;
export const KEY_MACRO7 = 0x296;
export const KEY_MACRO8 = 0x297;
export const KEY_MACRO9 = 0x298;
export const KEY_MACRO10 = 0x299;
export const KEY_MACRO11 = 0x29a;
export const KEY_MACRO12 = 0x29b;
export const KEY_MACRO13 = 0x29c;
export const KEY_MACRO14 = 0x29d;
export const KEY_MACRO15 = 0x29e;
export const KEY_MACRO16 = 0x29f;
export const KEY_MACRO17 = 0x2a0;
export const KEY_MACRO18 = 0x2a1;
export const KEY_MACRO19 = 0x2a2;
export const KEY_MACRO20 = 0x2a3;
export const KEY_MACRO21 = 0x2a4;
export const KEY_MACRO22 = 0x2a5;
export const KEY_MACRO23 = 0x2a6;
export const KEY_MACRO24 = 0x2a7;
export const KEY_MACRO25 = 0x2a8;
export const KEY_MACRO26 = 0x2a9;
export const KEY_MACRO27 = 0x2aa;
export const KEY_MACRO28 = 0x2ab;
export const KEY_MACRO29 = 0x2ac;
export const KEY_MACRO30 = 0x2ad;

/*
 * Some keyboards with the macro-keys described above have some extra keys
 * for controlling the host-side software responsible for the macro handling:
 * -A macro recording start/stop key. Note that not all keyboards which emit
 *  KEY_MACRO_RECORD_START will also emit KEY_MACRO_RECORD_STOP if
 *  KEY_MACRO_RECORD_STOP is not advertised, then KEY_MACRO_RECORD_START
 *  should be interpreted as a recording start/stop toggle;
 * -Keys for switching between different macro (pre)sets, either a key for
 *  cycling through the configured presets or keys to directly select a preset.
 */
export const KEY_MACRO_RECORD_START = 0x2b0;
export const KEY_MACRO_RECORD_STOP = 0x2b1;
export const KEY_MACRO_PRESET_CYCLE = 0x2b2;
export const KEY_MACRO_PRESET1 = 0x2b3;
export const KEY_MACRO_PRESET2 = 0x2b4;
export const KEY_MACRO_PRESET3 = 0x2b5;

/*
 * Some keyboards have a buildin LCD panel where the contents are controlled
 * by the host. Often these have a number of keys directly below the LCD
 * intended for controlling a menu shown on the LCD. These keys often don't
 * have any labeling so we just name them KEY_KBD_LCD_MENU#
 */
export const KEY_KBD_LCD_MENU1 = 0x2b8;
export const KEY_KBD_LCD_MENU2 = 0x2b9;
export const KEY_KBD_LCD_MENU3 = 0x2ba;
export const KEY_KBD_LCD_MENU4 = 0x2bb;
export const KEY_KBD_LCD_MENU5 = 0x2bc;

export const BTN_TRIGGER_HAPPY = 0x2c0;
export const BTN_TRIGGER_HAPPY1 = 0x2c0;
export const BTN_TRIGGER_HAPPY2 = 0x2c1;
export const BTN_TRIGGER_HAPPY3 = 0x2c2;
export const BTN_TRIGGER_HAPPY4 = 0x2c3;
export const BTN_TRIGGER_HAPPY5 = 0x2c4;
export const BTN_TRIGGER_HAPPY6 = 0x2c5;
export const BTN_TRIGGER_HAPPY7 = 0x2c6;
export const BTN_TRIGGER_HAPPY8 = 0x2c7;
export const BTN_TRIGGER_HAPPY9 = 0x2c8;
export const BTN_TRIGGER_HAPPY10 = 0x2c9;
export const BTN_TRIGGER_HAPPY11 = 0x2ca;
export const BTN_TRIGGER_HAPPY12 = 0x2cb;
export const BTN_TRIGGER_HAPPY13 = 0x2cc;
export const BTN_TRIGGER_HAPPY14 = 0x2cd;
export const BTN_TRIGGER_HAPPY15 = 0x2ce;
export const BTN_TRIGGER_HAPPY16 = 0x2cf;
export const BTN_TRIGGER_HAPPY17 = 0x2d0;
export const BTN_TRIGGER_HAPPY18 = 0x2d1;
export const BTN_TRIGGER_HAPPY19 = 0x2d2;
export const BTN_TRIGGER_HAPPY20 = 0x2d3;
export const BTN_TRIGGER_HAPPY21 = 0x2d4;
export const BTN_TRIGGER_HAPPY22 = 0x2d5;
export const BTN_TRIGGER_HAPPY23 = 0x2d6;
export const BTN_TRIGGER_HAPPY24 = 0x2d7;
export const BTN_TRIGGER_HAPPY25 = 0x2d8;
export const BTN_TRIGGER_HAPPY26 = 0x2d9;
export const BTN_TRIGGER_HAPPY27 = 0x2da;
export const BTN_TRIGGER_HAPPY28 = 0x2db;
export const BTN_TRIGGER_HAPPY29 = 0x2dc;
export const BTN_TRIGGER_HAPPY30 = 0x2dd;
export const BTN_TRIGGER_HAPPY31 = 0x2de;
export const BTN_TRIGGER_HAPPY32 = 0x2df;
export const BTN_TRIGGER_HAPPY33 = 0x2e0;
export const BTN_TRIGGER_HAPPY34 = 0x2e1;
export const BTN_TRIGGER_HAPPY35 = 0x2e2;
export const BTN_TRIGGER_HAPPY36 = 0x2e3;
export const BTN_TRIGGER_HAPPY37 = 0x2e4;
export const BTN_TRIGGER_HAPPY38 = 0x2e5;
export const BTN_TRIGGER_HAPPY39 = 0x2e6;
export const BTN_TRIGGER_HAPPY40 = 0x2e7;

/* We avoid low common keys in module aliases so they don't get huge. */
export const KEY_MIN_INTERESTING = KEY_MUTE;
export const KEY_MAX = 0x2ff;
export const KEY_CNT = (KEY_MAX+1);

