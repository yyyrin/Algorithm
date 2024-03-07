// 통과한 코드
function solution(bandage, health, attacks) {
  const [advanceTime, recoveryPerSec, additionalRecovery] = bandage;
  let result = health;

  // 현재 시간
  let nowTime = 1;

  for (const [attackTime, damage] of attacks) {
    // 회복할 수 있는 시간
    const recoveryCount = attackTime - nowTime;

    // 연속 성공 횟수
    const success = Math.floor(recoveryCount / advanceTime);

    // 총 회복량 계산 후 최신 체력 업데이트
    result += recoveryCount * recoveryPerSec + success * additionalRecovery;

    // 최대 체력 이상으로 회복 불가능하기 때문에 현재 체력이 최대 체력보다 큰지 비교
    if (result >= health) result = health;

    // 공격 받으면 체력 감소
    result -= damage;

    // 캐릭터 체력이 0 이하가 된 경우 -1 반환
    if (result <= 0) {
      return -1;
    }

    nowTime = attackTime + 1;
  }

  return result;
}

// 통과하지 못한 코드(회복하는 경우 처리하는 과정에서 코드 꼬임)
/*
function solution(bandage, health, attacks) {
  const [advanceTime, recoveryPerSec, additionalRecovery] = bandage;
  let result = health;

  let nowTime = 1;

  for (let i = 0; i < attacks.length; i++) {
    const [attackTime, damage] = attacks[i];
    const recoveryCount = attackTime - nowTime;

    // 회복하는 경우 처리
    if (recoveryCount) {
      for (let j = 1; j <= recoveryCount; j++) {
        if (result + recoveryPerSec <= health) {
          result += recoveryPerSec;
        }
        if (j % advanceTime === 0 && result + additionalRecovery <= health) {
          result += additionalRecovery;
        }
      }
    }

    // 몬스터 공격 처리
    result -= damage;

    // 캐릭터 체력이 0 이하가 된 경우
    if (result <= 0) {
      result = -1;
      break;
    }

    nowTime = attackTime + 1;
  }

  return result;
}
*/