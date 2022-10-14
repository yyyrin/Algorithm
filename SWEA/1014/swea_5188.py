# 최소합

import sys
sys.stdin = open('input_5188.txt')

def ff(x, y, sub_sum):
    global res
    sub_sum += arr[x][y]

    # 도착했으면
    if x == N-1 and y == N-1:
        # 이때까지의 최소합과 지금의 합을 비교해서 최소합 갱신
        if res > sub_sum:
            res = sub_sum
        return
    # 도착 안 했는데 지금까지의 합이 최소합을 넘어서면 -> 이동 중지!
    elif res < sub_sum:
        return

    # 2방향 탐색
    for d in [(1, 0), (0, 1)]:
        dx, dy = d
        nx, ny = x + dx, y + dy
        if nx < N and ny < N:
            ff(nx, ny, sub_sum)


T = int(input())
for tc in range(1, T+1):
    N = int(input())  # 가로 세로 칸 수
    arr = [list(map(int, input().split())) for _ in range(N)]

    res = 987654321
    ff(0, 0, 0)

    print(f'#{tc} {res}')




# while x < N-1 and y < N-1:
#     sub_sum = 0
#     for i in range(2):
#         nx, ny = x + delta[i][0], y + delta[i][1]
#
#         if 0 <= nx < N and 0 <= ny < N:
#             sub_sum += arr[nx][ny]
#
# min_sum = min(min_sum, sub_sum)
