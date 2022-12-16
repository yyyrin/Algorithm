# [BOJ] 2775. 부녀회장이 될테야

T = int(input())  # 테스트케이스 수
for _ in range(T):
    k = int(input())  # 몇 층?
    n = int(input())  # 몇 호?
    floor0 = list(f for f in range(1, n+1))  # 0층 list
    # floor0 = [1, 2, 3, 4, 5, ...]

    for i in range(k):          # 1 ~ k층까지 반복
        for j in range(1, n):   # floor0 list의 인덱스로 사용
            floor0[j] += floor0[j-1]  # 층별 각 호실의 사람 수 변경 / [k층 n호] = [k-1층 n호] + [k층 n-1호]

    print(floor0[-1])
    