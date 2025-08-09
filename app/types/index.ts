export interface Stat {
    Type: string;
    Value: string;
    Tooltip: string[];
  }
  
  export interface Armory {
    CharacterImage: string;
    ExpeditionLevel: number;
    PvpGradeName: string;
    TownLevel: number;
    TownName: string;
    Title: string;
    GuildMemberGrade: string;
    GuildName: string;
    UsingSkillPoint: number;
    TotalSkillPoint: number;
    Stats: Stat[];
    Tendencies?: { Type: string; Point: number; MaxPoint: number }[];
    CombatPower?: string;
    Decorations?: { Symbol?: string | null; Emblems?: string[] | null };
    ServerName: string;
    CharacterName: string;
    CharacterLevel: number;
    CharacterClassName: string;
    ItemAvgLevel: string;
  }
  
  export interface CharacterInfo {
    CharacterClassName: string;
    CharacterLevel: number;
    CharacterName: string;
    ItemAvgLevel: string;
    ServerName: string;
    characterImage?: string;
    armory?: Armory | null;
  }
  