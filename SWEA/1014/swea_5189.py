# 전자카트

import sys
sys.stdin = open('input_5189.txt')

# 큰일이다. 이거 어렵다.
# 중복되지 않은 순열 문제

# 배터리 최소 소비량 구하는 함수
# 각 횟수 / y의 값 / total 값
def ff(cnt, y, total):
    global res
    # 모든 경로를 다 돌았다면
    if cnt == N:
        # 사무실로 돌아올 때 배터리 사용량 더하기
        total += arr[y][0]
        # 배터리 총 사용량이 기존의 결과값보다 작으면 값 갱신
        if res > total:
            res = total
            return
    # 이동 도중에 배터리 총 사용량이 기존의 결과값보다 크다면 바로종료
    if res < total:
        return

    for i in range(1, N):
        # arr[n][n] = 0이므로 건너뛰기
        if not arr[y][i]:
            continue
        # 방문하지 않았다면
        if not visited[i]:
            # 방문체크
            visited[i] = 1
            # 다음 회차로 넘어가고, 도착 구역을 출발 구역으로 바꿔준다.
            ff(cnt+1, i, total+arr[y][i])
            # 방문해체
            visited[i] = 0


T = int(input())
for tc in range(1, T+1):
    N = int(input())   # 관리구역 마지막 번호
    arr = [list(map(int, input().split())) for _ in range(N)]  # 배터리 사용량

    res = 100000  # 임의로 큰 값 지정
    visited = [0] * N
    ff(1, 0, 0)  # 1회차부터 시작

    print(f'#{tc} {res}')


#-------------
## 내가 작성한 함수
# def ff(to, frm, b_sum):
#     global res
#     visited[to] = 1  # 방문표시
#     b_sum += arr[to][frm]
#
#     # 모두 방문했다면
#     if 0 not in visited:
#         b_sum += arr[frm][0]
#
#         if res > b_sum:
#             res = b_sum
#         return res
#
#     # 아직 방문하지 않은 곳이 있다면
#     for i in range(1, N):