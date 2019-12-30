---
layout: page
title: "MAKE BOOTABLE ISO IMAGE USING HEXADECIMAL EDITOR"
permalink: /project/make-bootable-iso-image-using-hexadecimal-editor/
---

2012년 2월 20일 / 2019년 12월 30일

## INTRODUCTION

부팅이 가능한 이미지를 컴파일러 혹은 다른 툴을 이용하지 않고 만들어보면서, 디스크 이미지 포맷(ISO)과 기본 입출력 시스템(BIOS)에 대한 개념을 잡기 위한 프로젝트입니다.

### INFORMATION

| Subject | Make bootable iso image using hexadecimal editor |
| Author  | iticworld                                        |
| Version | 0.1                                              |

### MILESTONES

1. "ITICWORLD"란 단어를 픽셀 단위로 직접 컨트롤하여 출력하는 부팅 이미지를 컴파일러 없이 헥사에디터만으로 만듭니다.
2. 디스크 이미지(ISO) 파일 포맷 구조를 이용해서 헥사에디터만으로 부팅 가능한 디스크 이미지 파일을 만듭니다.

## MAKE BOOTABLE IMAGE WITH SOME TOOLS

우선, 유용한 툴들을 이용해서 부팅 가능한 디스크 이미지 파일을 만들어 보려 합니다. 이를 위해서 이용한 툴은 nasm, nero burning 이며, [Writing Hello World Bootloader](https://www.viralpatel.net/taj/tutorial/hello_world_bootloader.php) 를 참조하였습니다.

### PREREQUISITES

1. NERO BURNING ROM

   NERO BURNING ROM은 CD, DVD 그리고 BLUE-RAY 디스크를 기록하고 복사하며, 스크래치, 노화 또는 열화에 관계 없 기록된 내뇽의 신뢰성을 보장해주는 소프트웨어입니다. 이 소프트웨어의 기능 중에는 부팅 가능한 이미지를 만들 수 있는 기능이 존재하고, 이를 통해서 만든 이미지를 사용하면 부팅시에 저장된 바이너리 코드를 실행할 수 있습니다. 이 바이너리 코드를 기록하는데 사용됩니다.

2. NASM

   NET-WIDE ASSEMBLER는 80x86과 80x64 어셈블러입니다. 이를 통하여 다양한 OBJECT 파일을 만들 수 있는데, 부팅 이미지 역시 만들 수 있습니다. 이는 부팅 이미지를 만들기 위한 어셈블리 코드를 바이너리 코드로 컴파일하는데 사용됩니다.

3. VIRTUAL BOX

   VIRTUAL BOX는 일반적인 목적의 x86 하드웨어 가상화를 위한 소프트웨어입니다. 이 소프트웨어를 통해 만든 부팅 가능한 이미지 파일을 테스트하는데 사용하였습니다.

### DESCRIPTION

__1. ASSEMBLY SOURCE__

```
[BITS 16]                   ; Tells the assembler that its a 16 bit code
[ORG 0x7C00]                ; Origin, tell the assembler that where the code will be in memory
                            ; after it is been loaded

MOV AL, 65
CALL PrintCharacter
JML $                       ; Infinite loop, hang it here.

PrintCharacter              ; Procedure to print character on screen
                            ; Assume that ASCII value is in register AL
MOV AH, 0x0E                ; Tell BIOS that we need to print one character on screen.
MOV BH, 0x00                ; Page no.
MOV BL, 0x07                ; Text attribute 0x07 is light-gray front on black background.

INT 0x10                    ; Call video interrupt
RET                         ; Return to calling procedure

TIMES 510 - ($ - $$) db 0   ; Fill the rest of sector with 0
DW 0xAA55                   ; Add boot signature at the end of bootloader                  
```

> [Writing Hello World Bootloader](https://www.viralpatel.net/taj/tutorial/hello_world_bootloader.php)

__2. COMPILE TO MAKE BOOT BINARY FILE__

bin 파일 포맷으로 boot.bin 파일을 만드는 명령입니다.

```
nasm iticworld.boot.loader.asm -f bin -o boot.bin
```

- -f: 출력 파일 포맷을 지정하는 옵션
- -o: 출력 파일 이름을 지정하는 옵션

__3. BOOTABLE CD USING NERO__

부팅 이미지 데이터를 선택해서 부팅 CD를 만들 수 있습니다. 이를 통해서 image.iso 파일을 만들었습니다.

__4. TEST USING VIRTUAL BOX__

WINDOWS XP 용 가상 머신을 만들고, CD-ROM 으로 부팅을 할 수 있도록 옵션을 설정한 후 이를 통해 실제 테스트를 진행해 보았습니다.

__5. RESULT__

아래의 이미지는 VIRTUAL BOX 를 통해서 'A'를 출력한 스크린샷입니다.

![simple booting result](/assets/images/make-bootable-image-using-hexadecimal-editor/simple-booting-result.png)

### CONCLUSION

이미 작성된 코드를 이용해서 간단한 부팅 가능한 시디 이미지 파일을 만들어 보았습니다. 이를 통해서 부팅 가능한 시디 이미지 파일이 생성되는 절차에 대해서 이해가 가능할 것 입니다.

## MAKE BOOTABLE ISO IMAGE FILE ONLY EDITING HEX CODE

이제 헥사 코드만을 이용하여 부팅이 가능한 시디 디스크 이미지를 파일을 만들어 볼 것입니다. 그를 위해서 이미 만들어진 image.iso 파일을 분석할 필요가 있습니다. 그리고 ISO9660 의 내용을 이해할 필요가 있습니다.

> [ISO 9660:1988 Information processing - Volume and file structure of CD-ROM for information interchange](https://www.iso.org/standard/17505.html)

### DESCRIPTION

__1. image.iso volume diagram__

한 섹터의 기본적인 크기는 2048 bytes 입니다. 한 섹터의 크기는 2048 이거나 2<sup>n</sup> 의 크기를 가질 수 있지만, 2048 이 범용적으로 사용됩니다. BOOT CATALOG와 BOOT IMAGE 영역은 [El Torito Bootable CD-ROM Format Specification Version 1.0 January 25, 1995](https://pdos.csail.mit.edu/6.828/2018/readings/boot-cdrom.pdf) 에 잘 묘사되어 있습니다. 그림에서 보듯이 image.iso 는 System Region, Volume Descriptor, Boot Catalog, Directory Description, Path Table, Boot Image 순으로 구성되어 있습니다. Volume Descript 는 Primary Volume Descriptor, Boot Record Volume Descriptor 그리고 Volume Terminator 로 구성되어 있습니다. Path Table 의 경우 같은 정보를 little endian, big endian 으로 기술하고 있는데, 각 Path Table은 한 섹터를 차지하고 있습니다. 각각 영역에 들어가야 할 정보들은 [Volume and File Structure of CDROM for Information Interchange (EMCA 119)](https://www.ecma-international.org/publications/standards/Ecma-119.htm) 에서 확인할 수 있습니다. image.iso 파일에서 사용하는 것은 Primary Volume Descriptor, Boot Record Volume Descriptor, Set Volume Terminator Description, Path Table, Directory Description 등이 있습니다. 또, Boot Catalog 관련해서 Validation Entry, Initial/Default Entry 가 [El Torito Bootable CD-ROM Format Specification Version 1.0 January 25, 1995](https://pdos.csail.mit.edu/6.828/2018/readings/boot-cdrom.pdf) 에서 확인할 수 있습니다. 이와 같은 구조는 멀티 부팅을 지원하지 않고, 단일 부팅을 지원하는 구조입니다. 멀티부팅에 관해서 보다 자세히 알려고 하면 [El Torito Bootable CD-ROM Format Specification Version 1.0 January 25, 1995](https://pdos.csail.mit.edu/6.828/2018/readings/boot-cdrom.pdf) 참고해야 합니다.

![bootable image structure](/assets/images/make-bootable-image-using-hexadecimal-editor/bootable-image-structure.png)

__2. Analysis image.iso file__

```
locationOfFirstSectorOfBootCatalog : 0x00000013
= SET VOLUME TERMINATOR DESCRIPTORS ================
= BOOT CATALOG =====================================
bootCatalogValidation->headerID : 1
bootCatalogValidation->platformID : 0
bootCatalogValidation->IDString : NERO BURNING ROM
bootCatalogValidation->checksum : 138
bootCatalogValidation->keyByte1 : 0x55
bootCatalogValidation->keyByte2 : 0xAA
initialEntry->bootIdicator : 0x88
initialEntry->bootMediaType : 2
initialEntry->loadSegment : 07C0
initialEntry->systemType : 6
initialEntry->sectorCount : 1
initialEntry->loadRBA : 0x00000017
= DIRECTORY 1 & 2 ==================================
- DIRECTORY 1 --------------------------------------
extentDirDesc->LengthOfDirectoryRecord : 34
extentDirDesc->extendedAttributeRecordLength : 0
extentDirDesc->locationOfExtent : 20
extentDirDesc->dataLength : 2048
directoryRecordForRootDirectory.recordingDateAndTime : 20122141410
extentDirDesc->fileFlags : 2
extentDirDesc->fileUnitSize : 0
extentDirDesc->interleaveGapSize : 0
extentDirDesc->volumeSequenceNumber : 1
extentDirDesc->lengthOfFileID : 1
directoryRecordForRootDirectory.fileID : 0x00
- DIRECTORY 2 --------------------------------------
extentDirDesc->LengthOfDirectoryRecord : 34
extentDirDesc->extendedAttributeRecordLength : 0
extentDirDesc->locationOfExtent : 20
extentDirDesc->dataLength : 2048
directoryRecordForRootDirectory.recordingDateAndTime : 20122141410
extentDirDesc->fileFlags : 2
extentDirDesc->fileUnitSize : 0
extentDirDesc->interleaveGapSize : 0
extentDirDesc->volumeSequenceNumber : 1
extentDirDesc->lengthOfFileID : 1
directoryRecordForRootDirectory.fileID : 0x01
= PATH TABLE =======================================
pathTable->lengthOfDirID : 1
pathTable->extendedAttributeRecordLength : 0
pathTable->locationOfExtent : 0x00000014
pathTable->parentDirectoryNumber : 0x00000001
pathTable->directoryID :
```

__3. Make Bootable ISO image__

```
PRIMARY_VOLUME_DESCRIPTOR primaryVolumeDesc={
0x01, // PRIMARY VOLUME DESCRIPTOR NUMBER
{0x43,0x44,0x30,0x30,0x31}, // STANDARD ID "CD001"
0x01, // VERSION 1
0x00, // UNUSED
"", // SYSTEM ID
"SIIK BOOTABLE CD", // VOLUME ID
{0,}, // UNUSED
{0x18,0x00,0x00,0x00,0x00,0x00,0x00,0x18}, // VOLUME SPACE SIZE, {little endian:4, big endian:4}, 24=0x18
{0,}, // UNUSED
{0x01,0x00,0x00,0x01}, // VOLUME SET SIZE, {little endian:2, big endian:2}
{0x01,0x00,0x00,0x01}, // VOLUME SEQUENCE NUMBER, {little endian:2, big endian:2}
{0x00,0x08,0x08,0x00}, // LOGICAL BLOCK SIZE, {little endian:2, big endian:2}
{0x0A,0x00,0x00,0x00,0x00,0x00,0x00,0x0A}, // PATH TABLE SIZE, {little endian:4, big endian:4}
{0x15,0x00,0x00,0x00}, // PATH TABLE SECTOR, {little endian:4}
{0x00,0x00,0x00,0x00}, // OPTIONAL PATH TABLE SECTOR, {little endian:4}
{0x00,0x00,0x00,0x16}, // PATH TABLE SECTOR, {big endian:4}
{0x00,0x00,0x00,0x00}, // OPTIONAL PATH TABLE SECTOR, {big endian:4}
{
// ROOT DIRECTORY DESCRIPTOR
22, // DIRECTORY DESCRIPTORS SIZE
0, // EXTENDED ATTRIBUTE RECORD LENGTH
0x14,0x00,0x00,0x00,0x00,0x00,0x00,0x14, // EXTENT LOCATION, {little endian:4, big endian:4}
0x00,0x08,0x00,0x00,0x00,0x00,0x08,0x00, // DATA LENGTH
112,2,16,16,1,0,0, // YEAR,MONTH,DAY,HOUR,MINUTE,SECOND,GMT
2, // FILE FLAGS
0, // FILE UNIT SIZE
0, // INTERLEAVE GAP SIZE
0x01,0x00,0x00,0x01, // VOLUME SEQUENCE NUMBER {little endian:2,big endian:2}
0x01, // ID STRING LENGTH
0x00 // ID, "."
},
"", // VOLUME SET ID
"siik", // PUBLISHER ID
"siik", // DATA PREPARER ID
"hex editor", // APPLICATION ID
"", // COPYRIGHT FILE ID
"", // ABSTRACT FILE ID
"", // BIBLIOGRAPHIC FILE ID
"201202161601000", // CREATION DATE
"201202161601000", // MODIFICATION DATE
"", // EXPIRE DATE
"", // EFFECTIVE DATE
1, // FILE STRUCTURE VERSION
{0,}, // APPLICATION USE
{0,} // UNUSED
};
BOOTRECORD_VOLUME_DESCRIPTOR bootRecordVolumeDesc={
0, // VOLUME DESCRIPTOR : BOOT RECORD VOLUME DESCRIPTOR
{0x43,0x44,0x30,0x30,0x31}, // CD001
1, // VERSION
"EL TORITO SPECIFICATION", // "EL TORITO SPECIFICATION"
{0,}, // UNUSED
{0x13,0x00,0x00,0x00}, // BOOT CATALOG SECTOR NUMBER
{0,} // UNUSED
};
TERMINATOR_VOLUME_DESCRIPTION volumeDescriptorTerminator={
0xFF, // SET VOLUME TERMINATOR
{0x43,0x44,0x30,0x30,0x31}, // CD001
1, // VERSION
{0,} // UNUSED
};
BOOT_CATALOG bootCatalog={
0x01, // VALIDATION HEADER ID
0x00, // VALIDATION PLATFORM ID 0=80x86
{0,}, // VALIDATION RESERVED
"HEX EDITOR", // VALIDATION ID STRING (0x48,0x45,0x58,0x20,0x45,0x44,0x49,0x54,0x4F,0x52)
{0x2D,0x05}, // VALIDATION CHECKSUM
// (0x0001 + 0x4548 + 0x2058+ 0x4445+ 0x5449+ 0x524F+0xAA55 = 0x1FAD3 + 0x052D)
0x55, // CHECK BYTE
0xAA, // CHECK BYTE
0x88, // INTIAL ENTRY IS BOOTABLE
0x02, // EMULATION TYPE : 2 IS 1.44 meg diskette
{0xC0,0x07}, // LOAD SEGMENT
6, // SYSTEM TYPE
0, // UNUSED
{1,0}, // SECTOR COUNT
{0x17,0,0,0}, // RELATIVE LOGICAL BLOCK ADDRESS
{0,}, // UNUSED
};
ROOT_DIRECTORY_DESC ExtentAboutrootDirDesc={
// ROOT "." DIRECTORY DESCRIPTION
0x22, // RECORDED LENGTH
0x00, // EXTENDED DATA LENGHT
{0x14,0x00,0x00,0x00,0x00,0x00,0x00,0x14}, // SECTOR ADDRESS {little endian:4, big endian:4}
{0x00,0x08,0x00,0x00,0x00,0x00,0x08,0x00}, // DATA LENGTH {little endian:4, big endian:4}
{112,2,16,16,1,0,0},
// RECORDING TIME
0x02, // DIRECTORY FILE FLAG
0x00, // FILE UNIT SIZE
0x00, // INTERLEAVE GAP SIZE
{0x01,0x00,0x00,0x01}, // VOLUME SEQUENCE {little endian:2,big endian:2}
0x01, // FILE ID LENGTH
0x00, // "." FILE ID
// ROOT "." DIRECTORY DESCRIPTION
0x22, // RECORDED LENGTH
0x00, // EXTENDED DATA LENGHT
{0x14,0x00,0x00,0x00,0x00,0x00,0x00,0x14}, // SECTOR ADDRESS {little endian:4, big endian:4}
{0x00,0x08,0x00,0x00,0x00,0x00,0x08,0x00}, // DATA LENGTH {little endian:4, big endian:4}
{112,2,16,16,1,0,0},
// RECORDING TIME
0x02, // DIRECTORY FILE FLAG
0x00, // FILE UNIT SIZE
0x00, // INTERLEAVE GAP SIZE
{0x01,0x00,0x00,0x01}, // VOLUME SEQUENCE {little endian:2,big endian:2}
0x01, // FILE ID LENGTH
0x00, // ".." FILE ID
{0,}
};
PATH_TALBE littleEndianPathTable={
0x01, // IS ROOT DIR
0x00, // EXTEND ATTRIBUTE DATA LENGTH
{0x14,0x00,0x00,0x00}, // LITTLE ENDIAN SECTOR ADDRESS
{0x01,0x00}, // LITTLE ENDIAN SECTOR COUNT
{0,} // UNUSED
};
PATH_TALBE bigEndianPathTable={
0x01, // ROOT DIR
0x00, // EXTEND ATTRIBUTE DATA LENGTH
{0x00,0x00,0x00,0x14}, // BIG ENDIAN SECTOR ADDRESS
{0x00,0x01}, // BIG ENDIAN SECTOR COUNT
{0,} // UNUSED
};
BOOT_IMAGE bootImage={
{0xB0,0x41,0xE8,0x02,0x00,0xEB,0xFE,0xB4,0x0E,0xB7,0x00,0xB3,0x07,0xCD,0x10,0xC3,0x00,},
// BOOT IMAGE boot.bin
{0x55,0xAA}, // CHECK BYTES
{0,} // UNUSED
};
```

위의 코드는 이전에 만들었던 'A' 만을 출력하는 boot.bin 의 바이너리 코드를 이용하여 각각의 데이터 구조에 정보를 삽입하고, 마지막 BOOT IMAGE 영역에 boot.bin 바이너리 코드를 삽입하는 것입니다. 각 자료형은 아래 표와 같습니다. 그 정보에 대한 설명은 ISO9660 과 EMCA 119, 그리고 El Torito Bootable CD-ROM Format Specification Version 1.0 January 25, 1995 에 기술되어 있습니다.

__4. Define Structures To Create ISO Image__

```
typedef struct tagPrimaryVolumeDescriptor
{
  unsigned char volumeDescriptor;
  unsigned char standardID[5];
  unsigned char volumeDescriptorVersion;
  unsigned char unused1;
  unsigned char systemID[32];
  unsigned char volumeID[32];
  unsigned char unused2[8];
  unsigned char volumeSpaceSize[8];
  unsigned char unused3[32];
  unsigned char volumeSetSize[4];
  unsigned char volumeSequenceNumber[4];
  unsigned char logicalBlockSize[4];
  unsigned char pathTableSize[8];
  unsigned char locationOfOccurrenceTypeLPathTable[4];
  unsigned char locationOfOptOccurrenceTypeLPathTable[4];
  unsigned char locationOfOccurrenceTypeMPathTable[4];
  unsigned char locationOfOptOccurrenceTypeMPathTable[4];
  unsigned char directoryRecordForRootDirectory[34];
  unsigned char volumeSetID[128];
  unsigned char publisherID[128];
  unsigned char dataPreparerID[128];
  unsigned char applicationID[128];
  unsigned char copyrightFileID[37];
  unsigned char abstractFileID[37];
  unsigned char bibliographicFileID[37];
  unsigned char volumeCreationDate[17];
  unsigned char volumeModificationDate[17];
  unsigned char volumeExpirationDate[17];
  unsigned char volumeEffectiveDate[17];
  unsigned char fileStructureVerion;
  unsigned char reserved1;
  unsigned char applicationUse[512];
  unsigned char reserved2[653];
} PRIMARY_VOLUME_DESCRIPTOR;

typedef struct tagBootRecordVolumeDescriptor
{
  unsigned char bootRecordID;
  unsigned char standardID[5];
  unsigned char version;
  unsigned char bootSystemID[32];
  unsigned char unused1[32];
  unsigned char locationOfFirstSectorOfBootCatalog[4];
  unsigned char unused2[1974];
} BOOTRECORD_VOLUME_DESCRIPTOR;

typedef struct tagTerminatorVolumeDescriptor
{
  unsigned char bootRecordID;
  unsigned char standardID[5];
  unsigned char version;
  unsigned char unused1[2042];
} TERMINATOR_VOLUME_DESCRIPTION;

typedef struct tagBootCatalog{
  unsigned char validation_headerID;
  unsigned char validation_platformID;
  unsigned char validation_reserved1[2];
  unsigned char validation_IDString[24];
  unsigned char validation_checksum[2];
  unsigned char validation_keyByte1;
  unsigned char validation_keyByte2;
  unsigned char initEntry_bootIdicator;
  unsigned char initEntry_bootMediaType;
  unsigned char initEntry_loadSegment[2];
  unsigned char initEntry_systemType;
  unsigned char initEntry_unused;
  unsigned char initEntry_sectorCount[2];
  unsigned char initEntry_loadRBA[4];
  unsigned char optional[1984];
} BOOT_CATALOG;

typedef struct tagRootDirectoryDesc
{
  unsigned char root1_LengthOfDirectoryRecord;
  unsigned char root1_extendedAttributeRecordLength;
  unsigned char root1_locationOfExtent[8];
  unsigned char root1_dataLength[8];
  unsigned char root1_recordingDateAndTime[7];
  unsigned char root1_fileFlags;
  unsigned char root1_fileUnitSize;
  unsigned char root1_interleaveGapSize;
  unsigned char root1_volumeSequenceNumber[4];
  unsigned char root1_lengthOfFileID;
  unsigned char root1_fileID;
  unsigned char root2_LengthOfDirectoryRecord;
  unsigned char root2_extendedAttributeRecordLength;
  unsigned char root2_locationOfExtent[8];
  unsigned char root2_dataLength[8];
  unsigned char root2_recordingDateAndTime[7];
  unsigned char root2_fileFlags;
  unsigned char root2_fileUnitSize;
  unsigned char root2_interleaveGapSize;
  unsigned char root2_volumeSequenceNumber[4];
  unsigned char root2_lengthOfFileID;
  unsigned char root2_fileID;
  unsigned char default_unused[1980];
} ROOT_DIRECTORY_DESC;

typedef struct tagPathTable{
  unsigned char lengthOfDirID;
  unsigned char extendedAttributeRecordLength;
  unsigned char locationOfExtent[4];
  unsigned char parentDirectoryNumber[2];
  unsigned char reserved[2040];
} PATH_TALBE;

typedef struct tagBootImage{
  unsigned char binary[510];
  unsigned char checkBytes[2];
  unsigned char reserved[1536];
} BOOT_IMAGE;
```

__5. Test__

![simple booting result](/assets/images/make-bootable-image-using-hexadecimal-editor/simple-booting-result.png)

정상적으로 작동하였습니다.

| FILE SIZE       | 49,152 Bytes     |
| FILE SYSTEM     | CDFS             |
| AVAILABLE SPACE | 0                |
| TOTAL SIZE      | 48.0 KB          |
| VOLUME NAME     | SIIK BOOTABLE CD |

__6. Build & Analysis binary__

__6.1. NASM SOURCE CODE__

```
SubjectString db 'ITICWORLD', 0
```

__6.2. HEX__

```
BE 1E 7C E8 0B 00 EB FE B4 0E B7 00 B3 07 CD 10
C3 8A 04 46 08 C0 74 05 E8 ED FF EB F4 C3 49 54
49 43 57 4F 52 4C 44
```

__6.3. CREATE NEW ISO IMAGE FILE__

```
#ifdef MAKE_BOOTIMAGe_PRINT_A
{0xB0,0x41,0xE8,0x02,0x00,0xEB,0xFE,0xB4,0x0E,0xB7,0x00,0xB3,0x07,0xCD,0x10,0xC3,0x00,},
#else
{0xBE,0x1E,0x7C,0xE8,0x0B,0x00,0xEB,0xFE,0xB4,0x0E,0xB7,0x00,0xB3,0x07,0xCD,0x10,0xC3,0x8A,0x04,0x46,0x08,0xC0,0x74,0x05,0xE8,0xED,0xFF
#endif // MAKE_BOOTIMAGe_PRINT_A
```

__6.4. RESULT__

![iticworld booting result](/assets/images/make-bootable-image-using-hexadecimal-editor/iticworld-booting-result.png)

__6.5. BINARY CODE & ASSEMBLY CODE__

| OPCODE | ASSEMLBY     | DESCRIPTION                                                              |
| ------ | ------------ | ------------------------------------------------------------------------ |
| BE     | MOV eSI      | -                                                                        |
| 1E 7C  | 0x7C1E       | (SubjectString Label) in loaded segment                                  |
| E8     | CALL         | -                                                                        |
| 0B 00  | 0x000B       | -                                                                        |
| EB     | JUMP SHORT   | -                                                                        |
| FE     | ENDLESS LOOP | -                                                                        |
| B4     | MOV AH       | -                                                                        |
| 0E     | 0x0E         | -                                                                        |
| B7     | MOV BH       | -                                                                        |
| 00     | 0x00         | -                                                                        |
| B3     | MOV BL       | -                                                                        |
| 07     | 0x07         | -                                                                        |
| CD     | INT lb       | lb: Immediate data is encoded in the subsequent byte of the instruction. |
| 10     | 0x10         | -                                                                        |
| C3     | RETN         | -                                                                        |
| 8A     | MOV Gb, Eb   | -                                                                        |
| 04     | Gb, Eb       | (MOD:REG:R/M)=00:000:100, MOV AL, [SI]                                   |
| 46     | INC eSI      | -                                                                        |
| 08     | OR EB, GB    | (MOD:REG:R/M) = 11:000:000, OR AL, AL                                    |
| 74     | JE SHORT     | -                                                                        |
| 05     | 0x05         | -                                                                        |
| E8     | CALL         | -                                                                        |
| ED FF  | -            | CALL CURRENT POSTION + 0xFFED(signed 0x13) : CALL 0x000B OFFSET          |
| EB     | JMP SHORT JB | -                                                                        |
| F4     | JMP 0x11     | JMP 0x11 (LABEL NEXT CHARACTER)                                          |
| C3     | RETN         | -                                                                        |
| -      | ITICWORLD    | -                                                                        |
| -      | ZERO FILLED  | -                                                                        |
| 55 AA  | -            | -                                                                        |

### CONCLUSION

"EMCA 119"와 "El Torito Bootable CD-ROM Format Specification Version 1.0 January 25, 1995"에서 기술한 ISO IMAGE FILE 에 대한 내용을 가지고 헥사 코드만을 이용해서 부팅 가능한 이미지 파일을 만들었습니다. 네로를 이용할 경우 부팅 이미지만 총 600 섹터를 사용하였습니다. 이에 대한 이유가 있겠지만, 아직은 그와 관련된 자료를 찾지 못했습니다. 만든 이미지는 600 섹터가 아니라 24 섹터입니다. 그래서 섹터 관련한 크기를 24로 설정하였습니다. 그래도 테스트 결과는 부팅이 가능하였습니다. 이 부분에 대한 정보를 얻고, 이유를 확인해야 할 필요가 있습니다. 그리고 CDFS이외에 다른 파일 시스템 표준 역시 자료 조사하여 요약할 필요가 있습니다. 이것을 요약하고 라이브러리화 한다고 하면 쉽게 디스크 이미지 가장화 소프트웨어를 만들수 있을 것 입니다.

## MAKE BOOTABLE IMAGE ONLY TO EDIT HEX

Bootable ISO DISK Image 를 헥사코드만 이용해서 만들어 보았습니다. 이제 그 경험을 바탕으로 부팅 이미지 파일 역시 컴파일러 없이 스펙과 헥사 값만을 가지고 만들어 볼 것 입니다.

__1. BOOTABLE ISO DISK IMAGE SECTION MAP__

![bootable image structure - section map](/assets/images/make-bootable-image-using-hexadecimal-editor/bootable-image-structure-section-map.png)

Boot image 는 Boot Catalog에서 묘사한 대로, Boot Image Sector 에 저장됩니다. 그곳에 저장된 Boot Binary Code 가 BIOS Load 후에 수행하는 코드입니다. 그 코드는 16 비트 어셈블리 코드로 되어 있으며, 그 크기는 512 Byte 입니다. 그리고, 511 번째 바이트에 0x55, 그리고 512번째 바이트에 0xAA 가 삽입됩니다. 실제 코드를 작성할 때, 로드되는 세그먼트를 고려해서 코드를 작성해야 하는ㄴ데, BIOS 를 통해 로드되는 세그먼트 주소는 0x7C00 입니다. 그렇기 때문에, 어셈블리 코드에 MOV ESI, 0x7C1E 은 0x001E 를 참조하게 되는 것입니다.

| BE 1E 7C | MOV ESI, 0x7C1E |

위의 맵처럼, 부트 바이너리 코드는 boot image region에 첫번째에 삽입됩니다. 그리고 그 크기는 512 bytes 0xB800 ~ 0xBA00 까지 저장됩니다.

__2. BOOT BINARY ASSEMBLY CODE__

실제로 컴파일러를 이용하지 않을 생각입니다. 하지만 구조화된 밑그림을 그리지 않고, 헥사 코드를 바로 조작한다는 것은 쉽지 않습니다. 그래서 일단 구조적인 모습만을 고려하여 그것을 표준을 이용해서 헥사코드로 컴파일러 없이 변경한 후에 그 헥사 코드를 이미 만들어진 ISO IMAGE 에 삽입하려 합니다.

__2.1. BASIC PROCESS__

1. 비디오 모드를 변경
2. 저장된 데이터에서 X 좌표를 읽는다.
3. 만약, 값이 0이면, JMP $ 를 수행한다.
4. 저장된 데이터에서 Y 좌표를 읽은다.
5. 기본 값을 설정하고, 인터럽트를 보낸다.

__2.2. HEX CODE (NOT APPLIED JUMP OFFSET)__

| ASSEMBLEY    | HEX      | DESCRIPTION                |
| ------------ | -------- | -------------------------- |
| MOV AH, 0x00 | B4 00    | SET VIDEO MODE             |
| MOV AL, 0x12 | B0 12    | GRAPHIC MODE, 16, 640, 480 |
| INT 10       | CD 10    | VIDEO INTERRUPT            |
| MOV SI, --   | BE xx xx | -                          |
| MOV AH, 0x0C | B4 0C    | -                          |
| MOV AL, 0x02 | B0 02    | -                          |
| MOV CH, 0x00 | B5 00    | -                          |
| MOV DH, 0x00 | B6 00    | -                          |
| MOV BH, 0x00 | B7 00    | -                          |
| MOV CL, [SI] | 8A 0C    | MOD:REG:R/M:0C00:001:100   |
| OR CL, CL    | 08 C9    | MOD:REG:R/M:C9             |
| INC SI       | 46       | -                          |
| JZ --        | 74 xx    | JUMP SHORT                 |
| MOV DL, [SI] | 8A 14    | -                          |
| INC SI       | 46       | -                          |
| INT 0x10     | CD 10    | VIDEO INTERRUPT            |
| JMP --       | EB xx    | -                          |
| JMP $        | EB FE    | -                          |
| -            | -        | PIXEL DATA                 |
| -            | 55 AA    | CHECK BYTE                 |

__3. CALCULATE JUMP OFFSET__

| MOV SI, 23 | BE 23 7C | PIXEL DATA START OFFSET 0x23 |
| JZ 07      | 74 07    | JUMP SHORT                   |
| JMP F2     | EB F2    | JUMP SHORT                   |

__4. PIXEL DATA__

![pixel data first](/assets/images/make-bootable-image-using-hexadecimal-editor/pixel-data-desc-1.png)

```
01 01 02 01 03 01 04 01 05 01 07 01 08 01 09 01
0A 01 0B 01 0D 01 0E 01 0F 01 10 01 11 01 14 01
15 01 16 01 03 02 09 02 0F 02 13 02 17 02 03 03
09 03 0F 03 13 03 03 04 09 04 0F 04 13 04 17 04
01 05 02 05 03 05 04 05 05 05 09 05 0D 05 0E 05
0F 05 10 05 11 05 14 05 15 05 16 05
```

![pixel data second](/assets/images/make-bootable-image-using-hexadecimal-editor/pixel-data-desc-2.png)

```
19 01 1D 01 21 01 22 01 23 01 26 01 27 01 28 01
29 01 2C 01 32 01 33 01 34 01 35 01 19 02 1B 02
1D 02 20 02 24 02 26 02 2A 02 2C 02 32 02 36 02
19 03 1B 03 1D 03 20 03 24 03 26 03 27 03 28 03
29 03 2C 03 32 03 36 03 19 04 1B 04 1D 04 20 04
24 04 26 04 2A 04 2C 04 32 04 36 04 1A 05 1C 05
21 05 22 05 23 05 26 05 2A 05 0C 05 2D 05 2E 05
2F 05 30 05 32 05 33 05 34 05 35 05
```

__5. MERGE DATA__

1. CODE
2. PIXEL DATA
3. ZERO FILL
4. CHECH BYTES

__6. RESULT__

헥사에디터를 이용해서 데이타를 차례대로 삽입하였습니다.

![iticworld pixel result](/assets/images/make-bootable-image-using-hexadecimal-editor/iticworld-pixel-booting-result.png)

녹색으로 "ITICWORLD" 가 출력된 화면입니다.

### CONCLUSION

시간이 많이 걸리는 작업이었습니다. 실제로 ASSEMBLY CODE 를 작성하는데는 몇 분만에 작성하였는데, 실제로 밑그림부터 그려가며 헥사값을 살피고 그 값을 계산하고 이렇게 작업하여 걸린 시간은 4시간이 넘습니다. 저는 이 작업을 통해서 컴파일러가 아주 중요한 역할을 하며 구조화된 프로그래밍 언어가 얼마나 생산성을 높히는지 알게 되었고, 물론 디스크 이미지 포맷과 BIOS 프로그래밍에 대한 이해도 하였습니다. 기회가 되면 ELF(Executable and Linkable Format) 역시 헥사 코드만 이용하여 만들어 보려고 하고 있습니다.
